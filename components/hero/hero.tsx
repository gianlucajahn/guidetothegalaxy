import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <motion.p style={{ opacity: 1 }} whileHover={{ scale: 1.15, transition: { duration: 0.7, type: "spring", bounce: 0.5 } }}>🌌</motion.p>
      </div>
      <Image src={require(".//../../resources/images/guidetothegalaxy.png")} alt="BEYOND EARTH" width={420} height={36} className={styles.image} />

      <h1 className={styles.title}>The open-sourced guide on spacetravel</h1>
      <p className={styles.slogan}>An optimistic glance into the future of human spaceflight, padded with a pinch of sarcasm.</p>

      <div className={styles.buttonContainer}>
        <a href="https://guidetothegalaxy.vercel.app/documentation/introduction"><button className={styles.brightButton}>Start reading</button></a>
        <a href="https://github.com/gianlucajahn/guidetothegalaxy" target="_blank"><button className={styles.darkButton} style={{ color: "white !important" }}>GitHub</button></a>
      </div>

      <p className={styles.license}>License: MIT X11</p>
    </section>
  );
}
