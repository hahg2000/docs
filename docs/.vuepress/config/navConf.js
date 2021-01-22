module.exports = [
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
]