import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import css from "./audioplayer.module.scss";
import Image from "next/image";

export default function App() {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <div className={css.audioContainer}>
      <button className={css.playButton} onClick={onPlayPause}>
        <Image
          src={require(`../../resources/images/${
            isPlaying ? "pause" : "play"
          }.png`)}
          alt="Play"
          className={css.icon}
        />
      </button>
      <div className={css.audioplayer} id="waveform">
        <WavesurferPlayer
          waveColor="#007ad2"
          width={`35%`}
          height={225}
          url="https://audio.jukehost.co.uk/waRuPtXvOsBAHQUMFKXUapzluaqvPOnG"
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          barWidth={2}
          progressColor="#40bdff"
          cursorWidth={0}
        />
      </div>
    </div>
  );
}
