"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [sliderStyle, setSliderStyle] = useState({
    opacity: 0,
    left: "0px",
    width: "0px",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);

  // Cerrar menú móvil al hacer clic fuera
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
    <nav className={styles.navbar}>
      {!isMobileMenuOpen && (
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menú"
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
        {/* MOVIDO: El slider ahora está DENTRO de la lista para corregir el posicionamiento */}
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
            Inicio
          </Link>
        </li>

        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="https://salmorejo.tech/2025" className={styles.link}>
            Edición Anterior
          </Link>
        </li>

        <li
          onMouseEnter={handleMouseEnter}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="/aboutUs" className={styles.link}>
            Sobre Nosotros
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
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

