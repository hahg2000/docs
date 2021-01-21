const moment = require('moment')

module.exports = {
  title: 'hahg的简易博客',
  description: 'hahg的简易博客',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'vuepress搭建的hahg简易博客' }],
    ['meta', { name: 'keywords', content: 'hahg' }],
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          moment.locale(zh - cn)
          return moment(timestamp).format('LLLL')
        },
      },
    ],
  ],
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
