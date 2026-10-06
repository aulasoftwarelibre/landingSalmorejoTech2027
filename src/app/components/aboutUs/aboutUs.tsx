import styles from "./aboutUs.module.css";

export default function body() {
  return (
    <div className={styles.container}>
      <h1 className={styles.textAbout}>Sobre Nosotros</h1>
      <p className={styles.text}>
        El Aula de Software Libre fue creada en 2006 con la unión de un grupo de
        estudiantes que tenían intereses parecidos.<br></br>
        <br></br>Hoy en día, se siguen manteniendo los pilares que en aquel
        momento se definieron:
      </p>
      <ul className={styles.textList}>
        <li>
          - Difundir el uso, creación y mantenimiento del software libre y el
          conocimiento abierto.
        </li>
        <li>
          - Ser un punto de encuentro y lugar para realizar proyectos,
          actividades, talleres, etc.
        </li>
        <li>
          - Incentivar el interés en la programación en la comunidad a través de
          proyectos y colaboraciones.
        </li>
        <li>
          - Fomentar que los trabajos fin de grado se publiquen con licencia
          libre.
        </li>
        <li>
          - Velar por el uso de software libre y estándares abiertos en el
          ámbito de la universidad.
        </li>
      </ul>
      <p className={styles.text}>
        El SalmorejoTech es el mayor evento tecnológico de Córdoba, con 7 años
        de organización a nuestras espaldas.<br></br>
        <br></br>Contamos con los ponentes de primer nivel de las empresas más
        punteras y con los que hablamos de software, empresas, tecnología...
        <br></br>
        <br></br>Finalizando el dia con nuestro famoso:
        <br></br>Networking = Food + New Friends
      </p>
    </div>
  );
}
