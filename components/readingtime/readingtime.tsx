import { useRouter } from "next/router";
import * as React from "react";
import audiobookArray from "../../helpers/variables/audiobookArray";
import styles from "./readingtime.module.scss";

export interface ReadingTimeProps {
  duration: string;
}

export default function ReadingTime(props: ReadingTimeProps) {
  const router = useRouter();
  const [audiobookDuration, setAudiobookDuration] = React.useState(undefined);
  const [readTime, setReadTime] = React.useState(null);

  React.useEffect(() => {
    const path = router.pathname;

    if (router.pathname.includes("motivation")) {
      setAudiobookDuration(audiobookArray[0].languages[0].duration);
    } else if (router.pathname.includes("destinations")) {
      setAudiobookDuration(audiobookArray[1].languages[0].duration);
    } else if (router.pathname.includes("introduction")) {
      setAudiobookDuration(audiobookArray[2].languages[0].duration);
    }

    const readTimeVar = calcReadTime();
    setReadTime(readTimeVar);
  }, []);

  const calcReadTime = () => {
    if (typeof window === undefined) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const paragraphs = document.getElementsByTagName("p");
    let wordCount: number = 0;
    for (let i = 0; i < 20; i++) {
      let p = paragraphs[i];
      if (p) {
        let pContent = p.innerText;
        wordCount += pContent.split(" ").length;
      }
    }
    wordCount /= 130;
    let readTime = Math.round(wordCount);
    return readTime;
  };

  return (
    <div className={styles.readingTime}>
      <div className={styles.left}>
        <div className={styles.line} />
      </div>

      <div className={styles.right}>
        <p>Reading Time: {readTime ? readTime : null} minute{readTime > 1 ? "s" : ""}</p>
        <p>
          Audiobook:{" "}
          {props.duration
            ? props.duration.toString()
            : "Not available for this chapter"}{" "}
          {props.duration ? "minute" : null}{""}
          {props.duration
            ? props.duration.toString() !== "1"
              ? "s"
              : ""
            : null}
        </p>
      </div>
    </div>
  );
}
