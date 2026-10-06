import Image from "next/image";
import styles from "./body.module.css";
import logoSalmorejo from "../../assets/logoSalmorejo.png";

const IMAGE_WIDTH = 1508;
const IMAGE_HEIGHT = 241;

export default function body() {
  return (
    <div className={styles.container}>
      <div className={styles.fondo}>
        <div className={styles.image}>
          <Image
            src={logoSalmorejo}
            alt="Logotipo Salmorejo Tech 2026"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            priority
          />
        </div>
        <h1 className={styles.text}>
          LA CITA DE LA TECNOLOGÍA CORDOBESA REGRESA CON UNA ENERGÍA IMPARABLE
        </h1>
        <h1 className={styles.text2}>8 DE MAYO DE 2026</h1>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdNOP1mYrdZi2WQhaiZ-nMbRqYowmwW1T4RYTBlrnShJ-ukxA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.miboton}
        >
          CALL4PAPER
        </a>


      </div>
    </div>
  );
}
