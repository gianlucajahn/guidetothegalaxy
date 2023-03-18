import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./audioplayer.module.scss";
import { useRouter } from 'next/router';
import convertTimestamp from "../../helpers/convertTimestamp";

export interface AudioPlayerProps {}

export default function AudioPlayer(props: AudioPlayerProps) {
  const router = useRouter();
  const intervalRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [hasBeenPlaying, setHasBeenPlaying] = useState(false);
  const [audiobook, setAudiobook] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [hoverStatus, setHoverStatus] = useState(false);

  useEffect(() => {
    let audio;

    if (router.pathname.includes("motivation")) {
        audio = new Audio("https://audio.jukehost.co.uk/1zBw39Gecq9PbV3uZG1GFp9pDzzbR8fi")
        audio.volume = 0.6
        setAudiobook(audio);
    } else if (router.pathname.includes("destinations")) {
        audio = new Audio("https://audio.jukehost.co.uk/p8VjKaEkHeRYhR21aL0MAqAO8TTRXTY2")
        audio.volume = 0.6
        setAudiobook(audio);
    } else if (router.pathname.includes("introduction")) {
        audio = new Audio("https://audio.jukehost.co.uk/waRuPtXvOsBAHQUMFKXUapzluaqvPOnG")
        audio.volume = 0.6
        setAudiobook(audio);
    }
  }, [])

  useEffect(() => {
    if (audiobook === null) {
      return
    }

    let intervalId = setInterval(() => {
      setTimestamp(convertTimestamp(audiobook.currentTime));
      determineProgress(audiobook);
    }, 100);
    intervalRef.current = intervalId;

    return () => {
      const interval = intervalRef.current;
      clearInterval(interval);
      if (audiobook !== null) {
        audiobook.pause();
      }
    }
  }, [audiobook])

  const hoverBar = () => {
    const indicator = document.getElementById('indicator');

    if (hoverStatus) {
      setHoverStatus(false);
      indicator.style.height = "10px";
      indicator.style.width = "10px";
      indicator.style.bottom = "-0.46em"
    } else {
      setHoverStatus(true);
      indicator.style.height = "14px";
      indicator.style.width = "14px";
      indicator.style.bottom = "-0.55em"
    }
  }

  const clickButton = () => {
    if (hasBeenPlaying) {
      return;
    } else {
      setHasBeenPlaying(true);
    }
  }

  const skipProgress = (e: React.MouseEvent) => {
    const bar = document.getElementById('bar');
    const barWidth = bar.offsetWidth;
    const barPos = bar.getBoundingClientRect().x;
    const mousePos = e.clientX;
    const mouseOnBar = mousePos - barPos;
    const progressInPercent = mouseOnBar / barWidth;
    const newAudiobook = audiobook;
    newAudiobook.currentTime = newAudiobook.duration * progressInPercent;
    setAudiobook(newAudiobook);
  }

  const determineProgress = (audio: any) => {
    const bar = document.getElementById('bar');
    if (bar === null) {
      return;
    }
    const barWidth = bar.clientWidth;
    const progressBar = document.getElementById('progress');
    const progressInPercent = audio.currentTime / audio.duration;
    const indicator = document.getElementById('indicator');
    indicator.style.left = `${barWidth * progressInPercent - 2}px`;
    progressBar.style.width = `${barWidth * progressInPercent}px`;
  }

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
      <button className={styles.playButton} onClick={(e) => {playAudio(); clickButton()}}>
        <Image
          src={require(`../../resources/images/${
            playing ? audiobook.currentTime == audiobook.duration ? "play" : "pause" : "play"
          }.png`)}
          alt="Play"
          className={styles.icon}
        />
      </button>

      {hasBeenPlaying ? 
      <div className={styles.barContainer} style={{ opacity: audiobook ? !playing ? audiobook.currentTime >= 1 ? "1" : "0" : "1" : "0" }}>
        <div className={styles.tooltips}>
          <p>{audiobook ? timestamp : "0:00"}</p>
          <p>{audiobook ? convertTimestamp(audiobook.duration) : "0:00"}</p>
        </div>

        <div className={styles.indicator} id="indicator" />
        <div className={styles.barBackground} onClick={skipProgress} onMouseEnter={hoverBar} onMouseLeave={hoverBar} id="bar" />
        <div className={styles.barProgress} id="progress" style={{ backgroundColor: hoverStatus ? "#269dfd" : "#0077d6" }} />
      </div>
      : <h1 className={styles.callToAction} onClick={(e) => {playAudio(); clickButton()}}><span>🔊</span> Listen to this chapter</h1> }
    </div>
  );
}
