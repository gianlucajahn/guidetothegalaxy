import React, { useEffect } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero_de() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <motion.p style={{ opacity: 1 }} whileHover={{ scale: 1.15, transition: { duration: 0.7, type: "spring", bounce: 0.5 } }}>🌌</motion.p>
      </div>
      <Image src={require(".//../../resources/images/guidetothegalaxy.png")} alt="BEYOND EARTH" width={420} height={36} className={styles.image} />

      <h1 className={styles.title}>Die Online-Bibliothek zur Raumfahrt</h1>
      <p className={styles.slogan}>Ein optimistischer Blick in die Zukunft der menschlichen Raumfahrt, gefüttert mit einer Prise Sarkasmus.</p>

      <div className={styles.buttonContainer}>
        <a href="https://guidetothegalaxy.vercel.app/documentation/introduction"><button className={styles.brightButton}>Jetzt lesen</button></a>
        <a href="https://github.com/gianlucajahn/guidetothegalaxy" target="_blank"><button className={styles.darkButton} style={{ color: "white !important" }}>GitHub</button></a>
      </div>

      <p className={styles.license}>Lizenz: MIT X11</p>
    </section>
  );
}