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
    clientId: 'a54aa082970f4a8c0542',
    clientSecret: '99efbef670b6e48c3fbc3d2406045694b61b75d8',
    autoCreateIssue: true,
  },
  '@vuepress/back-to-top': true,
}