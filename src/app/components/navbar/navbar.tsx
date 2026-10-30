"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import inicioImage from "../../assets/inicio.png";
import edicionesAnterioresImage from "../../assets/edicionesAnteriores.png";
import sobreNosotrosImage from "../../assets/sobreNosotros.png";
import contactoImage from "../../assets/contacto.png";


//Reutilizado del año anterior ya que literalmente es el mismo

export default function Navbar() {
  const [sliderStyle, setSliderStyle] = useState({
    opacity: 0,
    left: "0px",
    width: "0px",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);

  // Cerrar menu móvil al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navListRef.current &&
        !navListRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  function handleMouseEnter(e: React.MouseEvent<HTMLLIElement>) {
    if (window.innerWidth > 650) {
      const li = e.currentTarget;
      setSliderStyle({
        opacity: 1,
        left: `${li.offsetLeft}px`,
        width: `${li.offsetWidth}px`,
      });
    }
  }

  function handleMouseLeave() {
    if (window.innerWidth > 768)
      setSliderStyle((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <nav
      className={`${styles.navbar} ${
        isMobileMenuOpen ? styles.navbarOpen : ""
      }`}
    >
      {!isMobileMenuOpen && (
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <ul
        ref={navListRef}
        className={`${styles.navList} ${
          isMobileMenuOpen ? styles.navListActive : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* MOVIDO: El slider ahora esta DENTRO de la lista para corregir el posicionamiento */}
        <div className={styles.slider} style={sliderStyle} />

        {isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={styles.closeButton}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
        )}

        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="/" className={styles.link}>
            <Image src={inicioImage} alt="" className={styles.hoverImage} />
            Inicio
            <Image src={inicioImage} alt="" className={styles.hoverImage} />
          </Link>
        </li>

        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="https://salmorejo.tech/2026/" className={styles.link}>
            <Image src={edicionesAnterioresImage} alt="" className={styles.hoverImage} />
            Edición Anterior
            <Image src={edicionesAnterioresImage} alt="" className={styles.hoverImage} />
          </Link>
        </li>

        
        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >

          {
            //AQUI QUIZAS PONER LA PAGINA DEL AULA?
          }
          <Link href="/aboutUs" className={styles.link}>
            <Image src={sobreNosotrosImage} alt="" className={styles.hoverImage} />
            Sobre Nosotros
            <Image src={sobreNosotrosImage} alt="" className={styles.hoverImage} />
          </Link>
        </li>

        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link
            href="https://www.uco.es/aulasoftwarelibre/contacto/"
            className={styles.link}
          >
            <Image src={contactoImage} alt="" className={styles.hoverImage} />
            Contacto
            <Image src={contactoImage} alt="" className={styles.hoverImage} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
