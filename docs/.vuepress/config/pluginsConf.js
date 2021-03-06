const moment = require('moment')
const secret = require('./secret')
moment.locale('zh-cn')

module.exports = {
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
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
  },
  '@vuepress/back-to-top': true,
}
