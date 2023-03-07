import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <p style={{ opacity: 1 }}>🌌</p>
      </div>
      <Image src={require(".//../../resources/images/guidetothegalaxy.png")} alt="GUIDE TO THE GALAXY" width={420} height={36} className={styles.image} />

      <h1 className={styles.title}>The open-sourced guide on spacetravel</h1>
      <p className={styles.slogan}>Learn about and contribute to a growing wiki on space, aerospace engineering and spacetravel.</p>

      <div className={styles.buttonContainer}>
        <a href="http://localhost:3001/documentation/introduction"><button className={styles.brightButton}>Start reading</button></a>
        <a href="https://github.com/gianlucajahn/guidetothegalaxy" target="_blank"><button className={styles.darkButton} style={{ color: "white !important" }}>GitHub</button></a>
      </div>

      <p className={styles.license}>License: MIT X11</p>
    </section>
  );
}
