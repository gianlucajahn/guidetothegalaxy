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
        <h2>What You're Getting</h2>
        <div className={styles.cards}>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>Everything for free, forever</h3>
            <p>
              All chapters in english and german, account creation, progress tracking, audiobooks and additional resources, all for free, forever.
            </p>
          </div>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>All the sources</h3>
            <p>
              If anything isn't being proven within an article, sources are being provided. No "believe me, I know my stuff" crap.
            </p>
          </div>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>Science lessons</h3>
            <p>
              Card Content and text in here, please. Card Content and text in
              here, please. Card Content and text in here, please.
            </p>
          </div>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>Bursts of nihilism</h3>
            <p>
              Card Content and text in here, please. Card Content and text in
              here, please. Card Content and text in here, please.
            </p>
          </div>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>Progress Tracking</h3>
            <p>
              Card Content and text in here, please. Card Content and text in
              here, please. Card Content and text in here, please.
            </p>
          </div>
          <div className={styles.card} onMouseMove={(e) => handleOnMouseMove(e)}>
            <h3>Top End Merchandise</h3>
            <p>
              Card Content and text in here, please. Card Content and text in
              here, please. Card Content and text in here, please.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
