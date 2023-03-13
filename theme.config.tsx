import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
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
    text: 'Copyright © 2023. The open-sourced guide on spacetravel.',
  },
  faviconGlyph: "🌌",
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' }
  ],
  nextThemes: {
    "defaultTheme": "dark"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GTTG'
    }
  }
}

export default config
