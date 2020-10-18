module.exports = {
  base: '/snowflake-ui/',
  title: 'Snowflake UI',
  description: 'A useful UI framework',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/ReformedCola/snowflake-ui' },
    ],
    sidebar: [
      {
        title: 'Getting Started',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: 'Components',
        children: ['/components/button']
      }
    ]
  },
}