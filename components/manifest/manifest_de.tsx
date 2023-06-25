import React, { useState } from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Manifest() {
  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverDiscord, setHoverDiscord] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
        <div className={styles.gradient} />
        <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/gianlucajahn/" target="_blank">
          <Image
            src={require(`.//../../resources/images/linkedin${
              hoverLinkedin ? "hovered" : ""
            }.png`)}
            alt="LinkedIn"
            width={28}
            className={styles.image}
            onMouseEnter={() => setHoverLinkedin(true)}
            onMouseLeave={() => setHoverLinkedin(false)}
          />
        </motion.a>
        <motion.a  whileHover={{ scale: 1.15 }} href="https://discordapp.com/users/556559991062921217" target="_blank">
          <Image
            src={require(`.//../../resources/images/discord${
              hoverDiscord ? "hovered" : ""
            }.png`)}
            alt="Discord"
            width={28}
            className={styles.image}
            onMouseEnter={() => setHoverDiscord(true)}
            onMouseLeave={() => setHoverDiscord(false)}
          />
        </motion.a>
      </div>
      <div className={styles.main}>
        <h1 id="int">Lern' mehr über die Raumfahrt</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>
              <Image
                src={require(".//../../resources/images/ufo.png")}
                alt="UFO"
                width={36}
                className={styles.ufo}
              />
              Dieses Projekt wurde mit einem Ziel ins Leben gerufen: Um absolut jedem die Möglichkeit zu geben, an unserem Gedankenexperiment durch die Zukunft der menschlichen Raumfahrt teilzunehmen. Lehn' dich also zurück und lies' - oder hör' - mit, während wir einen Blick auf das werfen, was vor uns liegt.
            </p>
            <motion.p
              className={styles.social}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
            >
              ✨ Tritt gern unserer Community bei!
            </motion.p>
            <a href="https://guidetothegalaxy.vercel.app/about">
              <motion.button
                className={styles.explore}
                whileHover={{ scale: 1.07 }}
                onMouseEnter={() => setHoverExplore(true)}
                onMouseLeave={() => setHoverExplore(false)}
              >
                <Image
                  src={require(`.//../../resources/images/explore${
                    hoverExplore ? "hovered" : ""
                  }.png`)}
                  alt="Explore"
                  width={20}
                  className={styles.image}
                />
                Erfahre mehr
              </motion.button>
            </a>
            <p className={styles.disclaimer}>
              Diese Website wurde von Gianluca Jahn konzeptioniert und entwickelt. Sollten Sie kollaborative oder geschäftliche Anliegen besprechen wollen, besuchen Sie die Unterseite <strong><span>Kontakt</span></strong>.
            </p>
          </div>
          <div className={styles.splineContainer}>
            <Spline scene="https://prod.spline.design/st7ENbZoNXAenxQE/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}
