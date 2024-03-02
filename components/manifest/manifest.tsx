import React, { useState } from "react";
import styles from "./manifest.module.scss";
import Image from "next/image";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Manifest() {
  const [hoverExplore, setHoverExplore] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverDiscord, setHoverDiscord] = useState(false);

  return (
    <section className={styles.section}>
      
    </section>
  );
}
