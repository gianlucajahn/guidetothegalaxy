import React, { useState } from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Manifest() {
  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverDiscord, setHoverDiscord] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
        <div className={styles.gradient} />
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/gianlucajahn/"
          target="_blank"
        >
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
        <motion.a
          whileHover={{ scale: 1.15 }}
          href="https://discordapp.com/users/556559991062921217"
          target="_blank"
        >
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
        <h1>Learn about the future of spaceflight</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>
              <Image
                src={require(".//../../resources/images/ufo.png")}
                alt="UFO"
                width={36}
                className={styles.ufo}
              />
              This project was created with one goal: Taking everyone who'd like
              to join us on a thought experiment into the eventual future of our
              species. Buckle your seatbelt and listen or read along while we
              take a glance at what lies ahead.
            </p>
            <motion.p
              className={styles.social}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
            >
              ✨ Feel free to join our community if you like it here!
            </motion.p>
            <a href="https://guidetothegalaxy.vercel.app/documentation/introduction">
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
                Explore now
              </motion.button>
            </a>
            <p className={styles.disclaimer}>
              This website has been conceptualized and built by Gianluca Jahn.
              If you have any questions, inquiries or business requests, see{" "}
              <strong>
                <span>Contact</span>
              </strong>
            </p>
          </div>
          <div className={styles.splineContainer}>
          </div>
        </div>
      </div>
    </section>
  );
}
