import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from "./theme.module.scss";

const config: DocsThemeConfig = {
  logo: <span className={styles.logo}>🌌 GUIDE TO THE GALAXY</span>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <meta content="Guide To The Galaxy" property="og:site_name"></meta>
      <meta property="og:description" content="A thought-experiment through the future of mankind. <br />
      Hand-crafted to inform and inspire." />
      <meta property="og:image" content="https://camo.githubusercontent.com/3d8670c2ca3bbf10006321157a1adaa8f6f5bb8bcc9f9e735d32068b0b65c277/68747470733a2f2f692e696d6775722e636f6d2f51454a4632654a2e706e67" />
    </>
  ),
  project: {
    link: 'https://github.com/gianlucajahn/guidetothegalaxy',
  },
  chat: {
    link: 'https://discordapp.com/users/556559991062921217',
  },
  docsRepositoryBase: 'https://github.com/gianlucajahn/guidetothegalaxy',
  footer: {
    text: 'Copyright © 2023 - Guide To The Galaxy, the open-sourced guide to spacetravel',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'de', text: 'Deutsch' }
  ],
  faviconGlyph: "🌌",
  nextThemes: {
    "defaultTheme": "dark"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Guide To The Galaxy'
    }
  }
}

export default config
