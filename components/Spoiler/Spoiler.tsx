import React, { useState } from "react";
import styles from "./Spoiler.module.scss";

interface SpoilerProps {
  headline: string;
  content: string;
}

const expandedStyles = {
    backgroundColor: "rgb(28, 118, 253)",
    justifyContent: "flex-start",
    padding: "14px 20px 20px 26px",
    maxHeight: "500px",
    flexDirection: "column"
};

const foldedStyles = {
    backgroundColor: "#393a3f",
};

export default function Hero(props: SpoilerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.spoiler} ${isExpanded ? styles.isExpanded : styles.isFolded}`} onClick={() => {!isExpanded ? setIsExpanded(!isExpanded) : null}} style={isExpanded ? expandedStyles : foldedStyles}>
      {isExpanded ? (
        <>
          <h2>👨‍🏫 Answer: {props.headline}</h2>
          <p>{props.content}</p>
        </>
      ) : (
        "Show results"
      )}
    </div>
  );
;}
