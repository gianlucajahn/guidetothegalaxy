import React from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function Manifest_de() {
  return (
    <section className={styles.section}>
      <h1>Learn about spaceflight and our future!</h1>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            Lorem ipsum dolor est dolor meret lupin retaris vuberol nomon. Lorem
            ipsum dolor est dolor meret lupin retaris vuberol nomon. Lorem ipsum
            dolor est dolor meret lupin retaris vuberol nomon.{" "}
          </p>
          <button>Explore now</button>
          <p className={styles.disclaimer}>This website is built and maintained through open-source and founded by Gianluca Jahn.</p>
        </div>
        <Spline scene="https://prod.spline.design/st7ENbZoNXAenxQE/scene.splinecode" />
      </div>
    </section>
  );
}
