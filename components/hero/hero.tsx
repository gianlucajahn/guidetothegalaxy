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
                <h3>An engineering jumpstart</h3>
                <p>
                  If you want to break into the aerospace engineering market,
                  you won't find any better jumpstart than this project.
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
          What's Awaiting Us
        </motion.h2>
        <motion.p
          className={styles.sarcastic}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Or should I say "Who's?", to build up some suspense?
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
            <h1>Terraforming Mars</h1>
            <p>
              We are going to terraform Mars. Are you already wondering how?
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
              Do flying cities sound too futuristic to you? Well, they aren't!
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
              What are Space Habitats and how can they house trillions of
              people?
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
            <h1>Alien Life</h1>
            <p>
              As we will learn, we will make alien contact sooner than you
              expected.
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
            Start reading now - or regret it later :)
          </p>
          <div className={`${styles.buttonContainer} ${styles.ctaButtons}`}>
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
