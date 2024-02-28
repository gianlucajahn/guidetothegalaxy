import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";
import css from "./audioplayer.module.scss";
import Image from "next/image";
import audiobookArray from "../../helpers/variables/audiobookArray";

export default function Audioplayer(props: any) {
  const { ident } = props;

  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getURL = (identifier: string) => {
    let url: string = ''
    audiobookArray.map((item, i) => {
      if (item.title === identifier) {
        if (typeof window === "undefined") {
          return
        }

        if (window.location.href.includes('de/')) {
          url = audiobookArray[i].languages[1].src
        } else {
          url = audiobookArray[i].languages[0].src
        }
      }
    })
    return url
  }
  const targetURL = getURL(ident);

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
          width={typeof window !== "undefined" && window.innerWidth <= 768 ? `90%` : `35%`}
          height={90}
          url={targetURL}
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
