
FROM node:26-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@12.16.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine AS runner

COPY --from=builder /app/out/ /usr/share/nginx/html/2027/

RUN printf '%s\n' \
    'server {' \
    '    listen 80;' \
    '    server_name _;' \
    '    location = /health {' \
    '        access_log off;' \
    '        default_type text/plain;' \
    '        return 200 "ok\n";' \
    '    }' \
    '    location = /2027 {' \
    '        return 301 /2027/;' \
    '    }' \
    '    location /2027/ {' \
    '        alias /usr/share/nginx/html/2027/;' \
    '        index index.html;' \
    '        try_files $uri $uri/ =404;' \
    '        error_page 404 /2027/404.html;' \
    '    }' \
    '    location = /2027/404.html {' \
    '        alias /usr/share/nginx/html/2027/404.html;' \
    '        internal;' \
    '    }' \
    '}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/health || exit 1
