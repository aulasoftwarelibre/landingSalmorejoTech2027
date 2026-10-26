import Image from "next/image";
import styles from "./footer.module.css";
import facebookImg from "../../assets/facebookLogo.png";
import instaImg from "../../assets/instaLogo.png";
import telegramImg from "../../assets/telegramLogo.png";
import linkedingImg from "../../assets/linkedinLogo.png";
import twitterImg from "../../assets/twitterLogo.png"
import youtubeImg from "../../assets/youtubeLogo.png";
import githubImg from "../../assets/githubLogo.png";
import logoAula from "../../assets/logoAula.png";

interface RRSS{

  id: number;
  image: any;
  alt: string;
  url: string;

}

const socials: RRSS[]=[

  {

    id:1,
    image:facebookImg,
    alt: "facebook logo",
    url: "https://www.facebook.com/AulaSoftwareLibre/",

  },

  {

    id:2,
    image:instaImg,
    alt: "instagram logo",
    url: "https://www.instagram.com/aulasoftwarelibre/?hl=es",

  },

  {

    id:3,
    image:telegramImg,
    alt: "telegram logo",
    url: "https://t.me/AulaSoftwareLibreUCO",

  },

  {

    id: 4,
    image: linkedingImg,
    alt: "linkeding logo",
    url: "https://www.linkedin.com/company/aulasoftwarelibre/posts/?feedView=all",


  },

  {

    id: 5,
    image: twitterImg,
    alt: "twitter logo",
    url: "https://x.com/aulasl",

  },

  {

    id: 6,
    image: githubImg,
    alt: "github logo",
    url: "https://github.com/aulasoftwarelibre",


  },

  {

    id: 7,
    image: youtubeImg,
    alt: "youtube logo",
    url: "https://www.youtube.com/c/AulaSoftwareLibre",

  },

];


export default function Footer() {
  return (
  <div className={styles.main}>
    <footer className={styles.footer}>
    <div className ={styles.info}>
    <p className={styles.organiza}>Organiza:</p>
    <Image
        src={logoAula}
        alt="Logo ASL"
        width={200}
        height={200}
      />
      <div className={styles.rrssContainer}>
        {socials.map((social) =>(
          <a key={social.id} href={social.url}>
              <Image
                src={social.image}
               alt={social.alt}
                width={30}
                height={30}
              />
            </a>
        ))}
      </div>
    </div>
    <div className={styles.contacto}>
      <p>
        ¡Encuéntranos!
        <br />
        <a
          href="mailto:Aulasoftwarelibre@uco.es"
          className={styles.aslLink}
        >
          Aulasoftwarelibre@uco.es
        </a>
      </p>
      <p>
        Aulario Averroes
        <br />
        (Campus de Rabanales)
      </p>
    </div>
  </footer>
</div>
  );
}