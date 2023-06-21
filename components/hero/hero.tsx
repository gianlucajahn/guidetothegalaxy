import React, { useEffect } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.logoContainer}>
        <Image src={require(".//../../resources/images/logo_new.png")} alt="BEYOND EARTH" className={styles.logo} />
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
