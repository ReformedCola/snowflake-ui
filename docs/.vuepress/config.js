module.exports = {
  base: '/snowflake-ui/',
  title: 'Snowflake UI',
  description: 'A great UI library',
  themeConfig: {
    // displayAllHeaders: true,
    logo: '/snowflake.png',
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
          '/components/popover',
          '/components/toast',
          '/components/collapse',
        ]
      }
    ]
  },
}