
const headConf = require('./config/headConf')
const pluginsConf = require('./config/pluginsConf')
const navConf = require('./config/navConf')



module.exports = {
  base: '/docs/',
  title: 'hahg的简易博客',
  description: 'hahg的简易博客',
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    logo: '/assets/img/logo.png',
    //左侧菜单栏图标
    nav:navConf ,
  },
}
