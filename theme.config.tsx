import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from "./theme.module.scss";
import { useRouter } from 'next/router';
import Logo from './components/Logo/Logo';

const config: DocsThemeConfig = {
  logo: <span className={styles.logo} style={{ display: "flex", gap: "8px" }}>
     <Logo />
     BEYOND EARTH
    </span>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <meta content="Beyond Earth" property="og:site_name"></meta>
      <meta name="theme-color" content="#3c98ed"></meta>
      <meta property="og:description" content="A thought-experiment through the future of mankind. Hand-crafted to inform and inspire." />
      <meta property="og:image" content="https://i.imgur.com/q3p5h2s.png" />
      <meta name="twitter:site" content="Beyond Earth"></meta>
      <meta name="twitter:title" content="Beyond Earth"></meta>
      <meta name="twitter:description" content="A thought-experiment through the future of mankind. Hand-crafted to inform and inspire."></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:image:src" content="https://i.imgur.com/q3p5h2s.png"></meta>
    </>
  ),
  project: {
    link: 'https://github.com/gianlucajahn/guidetothegalaxy',
  },
  search: {
    placeholder: "Search documentation..."
  },
  chat: {
    link: 'https://discordapp.com/users/556559991062921217',
  },
  docsRepositoryBase: 'https://github.com/gianlucajahn/guidetothegalaxy',
  footer: {
    text: 'Copyright © 2023 - Beyond Earth | The open-sourced guide on spacetravel.',
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
    const route = useRouter();
    const title = route.pathname.includes('index') ? 'Home | Beyond Earth' : '%s | Beyond Earth';
  
    return {
      titleTemplate: title
    };
  }
}

export default config
