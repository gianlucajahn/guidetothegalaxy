import Image from "next/image";
import * as React from "react";
import styles from "./guidetothegalaxy.module.scss";

export default function guidetothegalaxy() {
  return (
    <div className={styles.container}>
      <Image src={require(".//../../resources/images/rocket.png")} alt="Rocket" className={`${styles.overlay} ${styles.rocket}`} />
      <Image src={require(".//../../resources/images/ufo.png")} alt="UFO" className={`${styles.overlay} ${styles.ufo}`} />
      <Image src={require(".//../../resources/images/planet.png")} alt="Planet" className={`${styles.overlay} ${styles.planet}`} />
      <h1 className={styles.headline}>The Guide to the Galaxy</h1>
    </div>
  );
}
