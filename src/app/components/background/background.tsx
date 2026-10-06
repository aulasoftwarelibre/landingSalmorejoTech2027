"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./background.module.css";

export default function Background() {
  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });



  if (scroll < 0.2) {
    return (
      <motion.div
        className={styles.fondo}
        initial={{ scale: 1 }}
        animate={{ scale: 1.25 }}
        transition={{ duration: 1.75 }}
        aria-hidden
      />
    );
  } else {
    return (
      <motion.div
        className={styles.fondo}
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.75 }}
        aria-hidden
      />
    );
  }
}
