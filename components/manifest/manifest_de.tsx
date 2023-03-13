import React from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Card from "../card/card";

export default function Manifest_de() {
  return (
    <section className={styles.section}>
      <div className={styles.leftSide}>
        <h1>Was ist das hier genau?</h1>
        <div className={styles.firstRow}>
          <Card
            src="learn"
            slogan="Lerne mehr über die Raumfahrt"
            text="Erweitere dein Wissen zur Raumfahrt! Dieses Wiki wird in sehr naher Zukunft stark wachsen. Komm' also gern später noch einmal zurück. Wir haben sicher etwas Interessantes für dich parat."
          />
          <Card
            src="contribution"
            slogan="Bringe eigene Ideen ein"
            text="Falls du denkst, wir haben etwas Wichtiges übersehen oder uns vertan, kannst du dich gern entweder per Feedback-Page oder direkt per Pull Request via GitHub bei uns melden. Open-Source 💖"
          />
          <Card
            src="share"
            slogan="Teile spannende Neuigkeiten"
            text="Sollten dir unsere Inhalte gefallen, würden wir uns freuen, wenn du sie mit deinen Freunden teilst. Wer weiß, vielleicht wird einer davon ja dadurch zum Astronauten bekehrt. Sachen gibt's."
          />
        </div>
      </div>

      <div className={styles.rightSide}>
        <h1 className={styles.eyebrow}>Warum sollte ich dem Braten trauen?</h1>
        <div className={styles.secondRow}>
          <Card
            src="science"
            slogan="Wissenschaftlich geprüft"
            text="Wir legen höchsten Wert auf Korrektheit: Deshalb zitieren und verlinkten wir viele wissenschaftliche Arbeiten und widerrufen Infos, sollten Sie sich im Nachhinein als falsch herausstellen."
          />
          <Card
            src="verify"
            slogan="Durch Open-Source verifiziert"
            text="'Open-Source' zu sein hat viele Vorteile: Jeder kann sich an einem großen Projekt beteiligen. Auf diese Weise werden falsche Informationen fast sofort erkannt und herausgefiltert."
          />
          <Card
            src="not"
            slogan="Solltest du nicht"
            text="Wirklich nicht. Solltest du an der Richtigkeit einer Aussage zweifeln, kannst du unsere Quellen deshalb sehr gern in unseren unter jeder Seite verlinkten Fact-Sheets selbst nachlesen."
          />
        </div>
      </div>
    </section>
  );
}
