import Image from "next/image";
import * as React from "react";
import styles from "./audioplayer.module.scss";
import { useRouter } from 'next/router';

export interface AudioPlayerProps {}

export default function AudioPlayer(props: AudioPlayerProps) {
  const router = useRouter();

  const [playing, setPlaying] = React.useState(false);
  const [audiobook, setAudiobook] = React.useState(null);

  React.useEffect(() => {
    if (router.pathname.includes("motivation")) {
        let audio = new Audio("https://audio.jukehost.co.uk/1zBw39Gecq9PbV3uZG1GFp9pDzzbR8fi")
        audio.volume = 0.6
        setAudiobook(audio);
    } else if (router.pathname.includes("destinations")) {
        let audio = new Audio("https://audio.jukehost.co.uk/1zBw39Gecq9PbV3uZG1GFp9pDzzbR8fi")
        audio.volume = 0.6
        setAudiobook(audio);
    } else if (router.pathname.includes("introduction")) {
        let audio = new Audio("https://audio.jukehost.co.uk/1zBw39Gecq9PbV3uZG1GFp9pDzzbR8fi")
        audio.volume = 0.6
        setAudiobook(audio);
    }
  }, [])

  const playAudio = () => {
    let currentPlayStatus = playing ? true : false;
    setPlaying(!playing);

    if (audiobook && currentPlayStatus) {
      audiobook.pause();
    } else if (audiobook && !currentPlayStatus) {
      audiobook.play();
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.playButton} onClick={playAudio}>
        <Image
          src={require(`../../resources/images/${
            playing ? "pause" : "play"
          }.png`)}
          alt="Play"
          className={styles.icon}
        />
      </button>

      <div className={styles.barContainer}>
        <div className={styles.tooltips}>
          <p>{audiobook ? audiobook.currentTime : "0:00"}</p>
          <p>{audiobook ? audiobook.duration : "0:00"}</p>
        </div>

        <div className={styles.barBackground} />
        <div className={styles.barProgress} />
      </div>
    </div>
  );
}
