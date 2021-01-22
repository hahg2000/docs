const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
  base: '/docs/',
  title: 'hahg的简易博客',
  description: 'hahg的简易博客',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'vuepress搭建的hahg简易博客' }],
    ['meta', { name: 'keywords', content: 'hahg' }],

    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format('LLLL')
      },
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新的内容',
        buttonText: '更新',
      },
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'hahg2000',
      repo: 'docs',
      clientId: 'a54aa082970f4a8c0542',
      clientSecret: '99efbef670b6e48c3fbc3d2406045694b61b75d8',
      autoCreateIssue:true
    },
    '@vuepress/back-to-top':true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    //左侧菜单栏图标
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/about' },
      { text: 'Baidu', link: 'https://www.baidu.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          //子菜单栏
        ],
      },
      // {  设置分组
      //   text: 'Languages',
      //   items: [
      //     { text: 'Group1', items: [/*  */] },
      //     { text: 'Group2', items: [/*  */] }
      //   ]
      // }
    ],
  },
}
