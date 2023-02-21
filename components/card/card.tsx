import * as React from "react";
import styles from "./card.module.scss";
import Tilt from "react-tilt";
import LearnIcon from "../learnIcon";
import Image from "next/image";

export interface CardProps {
    src: string;
    slogan: string;
    text: string;
}

export default function Card(props: CardProps) {
  const {
    src,
    slogan,
    text
  } = props;

  return (
    <Tilt
      className={styles.tilt}
      options={{ max: 18, scale: 1.06 }}
      style={{ height: 255, width: 480 }}
    >
      <Image src={require(`.//../../resources/images/${src}.png`)} height={30} className={styles.image} alt="Learn" />
      <div className={styles.card}>
        <h3>{slogan}</h3>
        <p>{text}</p>
      </div>
    </Tilt>
  );
}
