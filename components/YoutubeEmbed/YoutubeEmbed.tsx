import React from "react";
import css from './YoutubeEmbed.module.scss';

type YoutubeEmbedProps = {
    embedId: string;
}

const YoutubeEmbed = (props: YoutubeEmbedProps) => (
  <div className={css.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;