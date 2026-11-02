# syntax=docker/dockerfile:1

FROM node:26-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@12.16.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginxinc/nginx-unprivileged:alpine AS runner

COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 3000;
    server_name _;
    root /usr/share/nginx/html;
    # Detrás de Traefik: redirecciones relativas para no perder https ni el puerto
    absolute_redirect off;

    gzip on;
    gzip_min_length 1024;
    gzip_types text/css application/javascript application/json application/xml image/svg+xml text/plain;

    error_page 404 /2027/404.html;

    location = /health {
        access_log off;
        default_type text/plain;
        return 200 "ok\n";
    }

    location /2027/_next/static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /2027/ {
        add_header Cache-Control "no-cache";
        try_files $uri $uri/ =404;
    }
}
EOF

# Next exporta sin el basePath, así que se copia bajo /2027
COPY --from=builder /app/out/ /usr/share/nginx/html/2027/

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1:3000/health || exit 1
