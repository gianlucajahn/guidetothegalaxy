import React from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Card from "../card/card";

export default function Manifest() {
  return (
    <section className={styles.section}>
      <h1>What's the deal?</h1>
      <div className={styles.firstRow}>
        <Card
          src="learn"
          slogan="Learn about space"
          text="Expand your knowledge on space and spaceflight! This wiki will grow similarly to how the field will grow in humanity's near future, so check back anytime you're curious for more and we might have you covered."
        />
        <Card
          src="contribution"
          slogan="Contribute your ideas"
          text="If you think we are missing something or don't have our facts right, you are more than welcome to correct us. In fact, this is the exact benefit we're looking for in being open-source."
        />
        <Card
          src="share"
          slogan="Share it"
          text="Share with others and inspire more people to learn about spaceflight. One out of every so many people aware about it will get into the spaceflight business so creating awareness will increase that number!"
        />
      </div>

      <h1 className={styles.eyebrow}>Why should I trust this?</h1>
      <div className={styles.secondRow}>
        <Card
          src="science"
          slogan="Backed by scientific papers"
          text="We take a scientific approach to shared information very seriously. Because of that, we cite and link a lot of scientific papers and will revoke claims based on them if they are proven untrue at a later time."
        />
        <Card
          src="verify"
          slogan="Verified through open-source"
          text="Being open-source has great benefits: Everyone can take part in a big project. The only requirement is them being right. Just like that, false information is being recognized almost instantly."
        />
        <Card
          src="not"
          slogan="You shouldn't"
          text="Honestly. The concept of trust is against science in the first place. If you are unsure about something being true, feel free to read through the sources it is based on and check for yourself. We link all of them."
        />
      </div>
    </section>
  );
}
