const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  webpack(config, options) {
    const { isServer } = options;

    return config;
  },
  head: {
    title: 'Beyond Earth',
    description: 'The open-source guide on space exploration.',
    image: './resources/images/hero5.png',
  },
})
