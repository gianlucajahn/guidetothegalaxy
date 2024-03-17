import React, { useEffect } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import Spline, { SplineEvent } from "@splinetool/react-spline";

export default function Hero() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className={styles.section}>
      <button className={styles.teaser}>
        <div className={styles.circle} />
        <div>Jetzt Live!</div>
      </button>
      <h1 className={styles.headline}>
        <div className={styles.headlineTop}>
          <div className={styles.brand}>BEY</div>
          <div className={styles.splineBox}>
            <Spline scene="https://prod.spline.design/pmYLJavayB3aKScg/scene.splinecode" />
          </div>
          <div className={styles.brand}>ND</div>
        </div>
        <span>EARTH</span>
      </h1>

      <div className={styles.heroSection}>
        <p className={styles.slogan}>
          Ein optimistischer Blick in die Zukunft der menschlichen Raumfahrt, gefüttert mit einer Prise Sarkasmus.
        </p>
        <div className={styles.buttonContainer}>
          <a href="https://beyondearth.gg/documentation/introduction">
            <button className={styles.brightButton}>Jetzt lesen</button>
          </a>
          <a
            href="https://github.com/gianlucajahn/guidetothegalaxy"
            target="_blank"
          >
            <button
              className={styles.darkButton}
              style={{ color: "white !important" }}
            >
              GitHub
            </button>
          </a>
        </div>

        <p className={styles.license}>License: MIT X11</p>
        <div className={`${styles.heroMouse} ${styles.anchor}`}>
          <div className={styles.mouseIcon}>
            <span></span>
          </div>
        </div>
      </div>

      <div className={styles.cardsSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Was Dich Erwartet
        </motion.h2>
        <motion.p
          className={styles.sarcastic}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Es ist ein Jammer, dass ich dich überzeugen muss, aber naja...
        </motion.p>
        <div className={styles.cards}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/piggybank.png")}
                alt="Piggy Bank"
              />
              <div>
                <h3>Alles, völlig kostenlos</h3>
                <p>
                  Alle Kapitel in Englisch und Deutsch, Account-Features, Progress 
                  Tracking, Audiobooks und zusätzliche Ressourcen, kostenlos,
                  für immer.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/folder.png")}
                alt="Sources"
              />
              <div>
                <h3>All unsere Quellen</h3>
                <p>
                  Sollte ein Beweis nicht innerhalb eines Kapitels erbracht werden,
                  findest du ihn im Quelldokument zum Ende jedes Kapitels. 
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/science.png")}
                alt="Science"
              />
              <div>
                <h3>Naturwissenschafts-Lektionen</h3>
                <p>
                  Jede Naturwissenschaft hat ihre Existenzberechtigung innerhalb
                  dieses Projekts. Du wirst sie alle kennenlernen!
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/nihilism.png")}
                alt="Nihilism"
              />
              <div>
                <h3>Nihilistische Existenzkrisen</h3>
                <p>
                  Nachdem du dieses Projekts gelesen oder angehört hast,
                  wirst du vielleicht denken, du bist völlig insignifikant. Stimmt sogar!
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/progress.png")}
                alt="Progress"
              />
              <div>
                <h3>Progress-Tracking</h3>
                <p>
                  Unser kostenloses Accountsystem macht es dir so einfach wie 
                  möglich, deinen Lese- oder Hörfortschritt zu tracken.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/merch.png")}
                alt="Merchandise"
              />
              <div>
                <h3>Top-End Merchandise</h3>
                <p>
                  Diese Website beinhaltet einen Merchandise-Shop, in dem wir großen
                  Wert auf hochwertige Verarbeitung legen. Non-Profit.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/opensource.png")}
                alt="Open Source"
              />
              <div>
                <h3>Die Möglichkeit, zu helfen</h3>
                <p>
                  Da dieses Projekt Open-Source ist, tu' dir keinen Zwang an und
                  füge ihm gern ein Kapitel hinzu, wenn du es verteidigen kannst!
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={styles.card}
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/discord.png")}
                alt="Discord"
              />
              <div>
                <h3>Eine (Nerd-) Community</h3>
                <p>
                  Lerne andere Leser und Weltraum-Enthusiasten auf unserem Discord-Server 
                  kennen, um Freunde in der Branche zu finden.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`${styles.card} ${styles.lastCard}`}
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <div className={styles.cardBorder}></div>
            <div className={styles.cardContent}>
              <Image
                className={styles.cardIcon}
                src={require(".//../../resources/images/rockets.png")}
                alt="Rocket"
              />
              <div>
                <h3>Starthilfe in die Branche</h3>
                <p>
                  Solltest du in der Raumfahrttechnik arbeiten wollen, wirst du
                  keine bessere Starthilfe in deine Traumbranche finden als dieses Projekt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.moreSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Was Uns Erwartet
        </motion.h2>
        <motion.p
          className={styles.sarcastic}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Oder sollte ich sagen "Wer?", um ein wenig Spannung aufzubauen?
        </motion.p>

        <div className={styles.revealCards}>
          <motion.div
            className={`${styles.revealCard} ${styles.terraforming}`}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.55,
              delay: 0.1,
            }}
            whileHover={{
              scale: 1.125,
              transition: { duration: 0.2, bounce: 0.8 },
            }}
          >
            <h1>Terraforming des Mars</h1>
            <p>
              Wir werden den Mars "terraformen". Fragst du dich, wie wir das tun?
            </p>
            <p></p>
          </motion.div>

          <motion.div
            className={`${styles.revealCard} ${styles.cloudcities}`}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.55,
              delay: 0.245,
            }}
            whileHover={{
              scale: 1.125,
              transition: { duration: 0.2, bounce: 0.8 },
            }}
          >
            <h1>Cloud Cities</h1>
            <p>
              Klingen fliegende Städte zu futuristisch für dich? Sind sie nicht!
            </p>
            <p></p>
          </motion.div>

          <motion.div
            className={`${styles.revealCard} ${styles.spacehabs}`}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.55,
              delay: 0.245,
            }}
            whileHover={{
              scale: 1.125,
              transition: { duration: 0.2, bounce: 0.8 },
            }}
          >
            <h1>Space Habitats</h1>
            <p>
              Was sind Space Habitats und wieviele Menschen haben dort
              Platz?
            </p>
            <p></p>
          </motion.div>

          <motion.div
            className={`${styles.revealCard} ${styles.alien}`}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.55,
              delay: 0.1,
            }}
            whileHover={{
              scale: 1.125,
              transition: { duration: 0.2, bounce: 0.8 },
            }}
          >
            <h1>Fremdes Leben</h1>
            <p>
              Wie wir bald lernen werden, sind wir nicht allein hier draußen...
            </p>
            <p></p>
          </motion.div>
        </div>

        <motion.div
          className={styles.cta}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.1,
            type: "spring",
            bounce: 0.55,
            delay: 0.275,
          }}
        >
          <p className={styles.ctaText}>
            Schaue jetzt rein - oder bereu' es später :)
          </p>
          <div className={`${styles.buttonContainer} ${styles.ctaButtons}`}>
            <a href="https://beyondearth.gg/documentation/introduction">
              <button className={styles.brightButton}>Jetzt lesen</button>
            </a>
            <a
              href="https://github.com/gianlucajahn/guidetothegalaxy"
              target="_blank"
            >
              <button
                className={styles.darkButton}
                style={{ color: "white !important" }}
              >
                GitHub
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.marsSpline}
          initial={{ y: 200, scale: 1 }}
          whileInView={{ y: 0, scale: 2.1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <Spline scene="https://prod.spline.design/KFWCEGUzLtn8396f/scene.splinecode" />
        </motion.div>
        <motion.div
          className={styles.sky}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </section>
  );
}
