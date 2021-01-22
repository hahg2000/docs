module.exports = [
  ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
  ['meta', { name: 'author', content: 'vuepress搭建的hahg简易博客' }],
  ['meta', { name: 'keywords', content: 'hahg' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
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
]