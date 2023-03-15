import * as React from "react";
import styles from "./readingtime.module.scss";

export interface ReadingTimeProps {}

export default function ReadingTime(props: ReadingTimeProps) {
  return (
    <div className={styles.readingTime}>
      <div className={styles.left}>
        <div className={styles.line} />
      </div>

      <div className={styles.right}>
        <p>Reading Time: 5 minutes</p>
        <p>Audiobook: 4 minutes</p>
      </div>
    </div>
  );
}
