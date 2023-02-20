import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from "./.next/static/media/logo_navbar.png";
import Image from 'next/image';
import styles from "./theme.module.scss";

const config: DocsThemeConfig = {
  logo: <span className={styles.logo}>🌌 GUIDE TO THE GALAXY</span>,
  project: {
    link: 'https://github.com/gianlucajahn/guidetothegalaxy',
  },
  chat: {
    link: 'https://discordapp.com/users/556559991062921217',
  },
  docsRepositoryBase: 'https://github.com/gianlucajahn/guidetothegalaxy',
  footer: {
    text: 'Copyright © 2023. The definitive guide to spacetravel on the web',
  },
}

export default config
