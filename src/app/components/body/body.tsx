import Image from "next/image";
import styles from "./body.module.css";
import logoSalmorejo from "../../assets/logoSalmorejo.png"

const IMAGE_WIDTH = 1385;
const IMAGE_HEIGHT = 299;


export default function body() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={logoSalmorejo}
          alt="Logotipo Salmorejo Tech 2026"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          priority
        />
      </div>
      <a
          href="https://mailchi.mp/4de2bca2a936/notificaciones-sobre-el-salmorejotech-2026"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.boton}
        >
          Notifícame
        </a>

    </div>
  );
}
