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
          target="_blank"
          rel="noopener noreferrer"
          className={styles.boton}
        >
          Notifícame
        </a>

    </div>
  );
}
