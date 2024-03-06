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
        <div>Now Live!</div>
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
          An optimistic glance into the future of human spaceflight, padded with
          a pinch of sarcasm.
        </p>
        <div className={styles.buttonContainer}>
          <a href="https://beyondearth.gg/documentation/introduction">
            <button className={styles.brightButton}>Start reading</button>
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
        <a className={`${styles.heroMouse} ${styles.anchor}`} href="">
          <div className={styles.mouseIcon}>
            <span></span>
          </div>
        </a>
      </div>

      <div className={styles.cardsSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          What You're Getting
        </motion.h2>
        <motion.p
          className={styles.sarcastic}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          It's a shame I have to convince you, but it is what it is...
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
                <h3>Everything for free</h3>
                <p>
                  All chapters in english and german, account creation, progress
                  tracking, audiobooks and additional resources, all for free,
                  forever.
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
                <h3>All the sources</h3>
                <p>
                  If anything isn't being proven within an article, sources are
                  being provided. No "believe me, I know my stuff" crap.
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
                <h3>Science lessons</h3>
                <p>
                  All natural sciences have their right to exist within this
                  project. You'll learn a lot about all of them!
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
                <h3>Bursts of nihilism</h3>
                <p>
                  After finishing reading or listening, you might think you're
                  unimaginably insignificant. You're right! But don't worry yet.
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
                <h3>Progress Tracking</h3>
                <p>
                  Our free account system makes it as easy as possible for you
                  to track your reading or listening progress.
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
                  This website features a merchandise shop from highest quality
                  fabrics in the merchandise market that is actually non-profit.
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
                <h3>A chance to contribute</h3>
                <p>
                  Since this project is open-source, if you feel like a chapter
                  is missing and can defend that claim, you can add it!
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
                <h3>A (nerdy) community</h3>
                <p>
                  Join other readers and space-enthusiasts on our discord server
                  to exchange and make friends in the field.
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
                src={require(".//../../resources/images/rockets.png")}
                alt="Rocket"
              />
              <div>
                <h3>An engineering jumpstart</h3>
                <p>
                  If you want to break into the aerospace engineering market,
                  you won't find any better motivation than this project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
