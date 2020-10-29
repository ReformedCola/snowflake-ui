module.exports = {
  base: '/snowflake-ui/',
  title: 'Snowflake UI',
  description: 'A useful UI framework',
  themeConfig: {
    // displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/ReformedCola/snowflake-ui' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
        ]
      }
    ]
  },
}