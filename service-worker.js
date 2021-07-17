/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b4862af28710e4267b402de508d3d90e"
  },
  {
    "url": "about/about.html",
    "revision": "d4edbf278e7e1f2e83b8eb8f83ed1ecd"
  },
  {
    "url": "assets/css/0.styles.a4afb5bf.css",
    "revision": "26b5c77e612b3b5eb267be445c6cf442"
  },
  {
    "url": "assets/img/homeLogo.png",
    "revision": "3a9743937514c776adf49b80a4350187"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "baf645d05f491ac17dd4f03c3c27eeed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2fb46730.js",
    "revision": "45ff57f8e5c106e8ccd23d3206378d44"
  },
  {
    "url": "assets/js/11.975c71ee.js",
    "revision": "7104f5119d2521fd265a1033c27f5b45"
  },
  {
    "url": "assets/js/12.059ae769.js",
    "revision": "59c6478de526af2d672dcb4861d1df51"
  },
  {
    "url": "assets/js/13.649c1695.js",
    "revision": "ec4a40b34448dc45e5e4f2a1a69a3691"
  },
  {
    "url": "assets/js/14.6a8737fd.js",
    "revision": "82e2315597126d7ab7d65258c2907a3c"
  },
  {
    "url": "assets/js/15.0b8de0f8.js",
    "revision": "b007122c9e117b52e845a5b8d25d63db"
  },
  {
    "url": "assets/js/16.4410d102.js",
    "revision": "970ed3e30891ec3853ee73cf2a77f114"
  },
  {
    "url": "assets/js/17.21542b2a.js",
    "revision": "b49b995ed79486dc323a7710726333c9"
  },
  {
    "url": "assets/js/18.9c6b6334.js",
    "revision": "fc09392635851dba7fa04b92a6e58b44"
  },
  {
    "url": "assets/js/19.3805f0fd.js",
    "revision": "b21b176a206f56fadacf513bd516cd00"
  },
  {
    "url": "assets/js/2.d32c4d1a.js",
    "revision": "1bb11ea656efd431577acfdb6f2ff711"
  },
  {
    "url": "assets/js/20.e676d273.js",
    "revision": "42f05525f75adac7171e57c20f24ef82"
  },
  {
    "url": "assets/js/21.fbdf7495.js",
    "revision": "326990425e4a46464cecb45a4b70df71"
  },
  {
    "url": "assets/js/22.9570e257.js",
    "revision": "65e885463dd219f1beed5ef1b9286c1a"
  },
  {
    "url": "assets/js/23.4be7db77.js",
    "revision": "dc20f3af72770028bfaedb5fb755906d"
  },
  {
    "url": "assets/js/24.e5dd610a.js",
    "revision": "530c08613fd13b5ee9aaefeed870109c"
  },
  {
    "url": "assets/js/25.b87936e6.js",
    "revision": "7bc3e06c537d738bcf8a5fcb3928ae07"
  },
  {
    "url": "assets/js/26.9478d521.js",
    "revision": "a51c1d2fd459e152373d9284875d6954"
  },
  {
    "url": "assets/js/27.8fb3b881.js",
    "revision": "da0e88e02fb8f7f68af67def597c6bca"
  },
  {
    "url": "assets/js/28.70255cc2.js",
    "revision": "9cf5dbb915e2c64742b5d76fcb7e99bd"
  },
  {
    "url": "assets/js/29.882947a3.js",
    "revision": "727cb217c2580d15a6ab0268678194ff"
  },
  {
    "url": "assets/js/3.055be0a8.js",
    "revision": "6d868fc0ccce8990f2ff79cce2ed96ec"
  },
  {
    "url": "assets/js/30.7ae5904c.js",
    "revision": "b8f540dc1bb137bb13c4bc469875695f"
  },
  {
    "url": "assets/js/31.4b49afd0.js",
    "revision": "f2fc06cd86fdf8e66c22e78d81dac772"
  },
  {
    "url": "assets/js/32.df541b37.js",
    "revision": "210b63628ea5056123e85dfda540c450"
  },
  {
    "url": "assets/js/33.ddaed3de.js",
    "revision": "84c1745d554af3063c70902e5df8d30a"
  },
  {
    "url": "assets/js/34.5e80203b.js",
    "revision": "2e838e09f804af7a70eac4dd19bd7b0c"
  },
  {
    "url": "assets/js/35.0be63530.js",
    "revision": "7696a819f4b7ac91aa8a4fe11f8fe8b3"
  },
  {
    "url": "assets/js/36.8273634e.js",
    "revision": "1af8b2ebd14827a1a832735514c08629"
  },
  {
    "url": "assets/js/37.37c9b278.js",
    "revision": "1f01fb12550cf84cdb4e23987b20ee01"
  },
  {
    "url": "assets/js/38.a9fcef0a.js",
    "revision": "37e37642a53cf6265df93e7aa008457e"
  },
  {
    "url": "assets/js/4.a96d5034.js",
    "revision": "5460f64cdbfb5bf50eb8b737cb5da58f"
  },
  {
    "url": "assets/js/5.79d58c64.js",
    "revision": "74a3aca8ca2fc28c718e8eade1729c5a"
  },
  {
    "url": "assets/js/6.dc517ec6.js",
    "revision": "61934bc9f7dc66d58331d0ec0e03352c"
  },
  {
    "url": "assets/js/7.4ea12e98.js",
    "revision": "158fab9e29908cadb95178f97e018aab"
  },
  {
    "url": "assets/js/8.9bc20865.js",
    "revision": "7100974b81c54454af4ad442b6fcda3b"
  },
  {
    "url": "assets/js/9.366e5dea.js",
    "revision": "b7030dfc27e5527dd282488bd9f9ef07"
  },
  {
    "url": "assets/js/app.4e37dad2.js",
    "revision": "0e285c15f17e1f2dfb73951a06047e29"
  },
  {
    "url": "config.html",
    "revision": "37ee021afd14ead27f00f571125b66de"
  },
  {
    "url": "doStudy/前端JS/原生JS(上).html",
    "revision": "eb0ecf9afc76b0979fb984e9856d72a3"
  },
  {
    "url": "doStudy/前端JS/原生JS(中).html",
    "revision": "2494c3739d694c55da2fe2ee8ff15e5a"
  },
  {
    "url": "doStudy/SSM框架/MyBatis3/二、单表的 CURD 操作.html",
    "revision": "3644f344f9fa6d1bcd7079efec66177f"
  },
  {
    "url": "doStudy/SSM框架/MyBatis3/三、关联关系查询.html",
    "revision": "9c710729ddb9119be3ff8256d884336c"
  },
  {
    "url": "doStudy/SSM框架/MyBatis3/四、查询缓存.html",
    "revision": "27523cf8120b10c1a2efc21c8c61a56a"
  },
  {
    "url": "doStudy/SSM框架/MyBatis3/五、Mybatis注解式开发.html",
    "revision": "0659e5797a02dc9a9252210329130c65"
  },
  {
    "url": "doStudy/SSM框架/MyBatis3/一、MyBatis入门.html",
    "revision": "caabdba47e69893cc1f57639a59b83bd"
  },
  {
    "url": "doStudy/SSM框架/Spring4/二、Spring与IoC.html",
    "revision": "c496c27c9651f1bcc0fdd41e082dacc4"
  },
  {
    "url": "doStudy/SSM框架/Spring4/六、Spring与Web.html",
    "revision": "a50d05f298c565a347ca55f951e16c75"
  },
  {
    "url": "doStudy/SSM框架/Spring4/三、Spring与AOP.html",
    "revision": "b6071085f7d9ab85a6a4c9cc1aebc36e"
  },
  {
    "url": "doStudy/SSM框架/Spring4/四、Spring与DAO.html",
    "revision": "7ad1ac65f644616d3774decad9087052"
  },
  {
    "url": "doStudy/SSM框架/Spring4/五、Spring与MyBatis.html",
    "revision": "d21ed45bb52b0c63976aac0467d5519e"
  },
  {
    "url": "doStudy/SSM框架/Spring4/一、Spring概述.html",
    "revision": "42cb757ab35c33b9d47c412b1f14642e"
  },
  {
    "url": "doStudy/SSM框架/SpringMVC/二、SpringMVC配置式开发.html",
    "revision": "bb2a07d02c22189f09a40aeeffd9eb29"
  },
  {
    "url": "doStudy/SSM框架/SpringMVC/三、SpringMVC注解式开发.html",
    "revision": "ed8ad13a32514473d814524558f06856"
  },
  {
    "url": "doStudy/SSM框架/SpringMVC/一、SpringMVC概述.html",
    "revision": "8734f50d25566b306ab4f6334569fb46"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/六、JUnit测试.html",
    "revision": "6d2a07eb8fd0f42c955fb6526e11799d"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/七、日志输出.html",
    "revision": "fdd17cee9081aafe996cc961bcb4644f"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/三、SSM框架前言-代理模式.html",
    "revision": "a7a9e2a37041d54e0616a7a0813df632"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/四、SSM框架前言-适配器模式.html",
    "revision": "72ada19e417089138b8cfae4636dd355"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/五、SSM框架前言-模板方法设计模式.html",
    "revision": "02b2c7b767cd33d4f51aa64f81eb8d10"
  },
  {
    "url": "doStudy/SSM框架/SSM前言/一、SSM框架前言-系统架构.html",
    "revision": "c83cf96db4530ef29f1c2a9e2fe98930"
  },
  {
    "url": "guide/index.html",
    "revision": "48f62531449474430e4ce9324d98610b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "3ff66f55195f40e5d0ad9bf2b214ce0f"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "281f42293de800d05d529f9d848c82e8"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "3528297ee8ef6da720d90ec8b0287d7a"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "204ee895ee35242d4d608e86a73ed979"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "ca7fe951062f63345ab96373605a9ec9"
  },
  {
    "url": "index.html",
    "revision": "fa659b29f1e1ac6c307d21fab81c137e"
  },
  {
    "url": "tags/index.html",
    "revision": "83fa850929871958ae00e8a6b05fa74b"
  },
  {
    "url": "toolDoc/Markdown/Markdown常用指令.html",
    "revision": "9d45da102b97a8199e5663a2b6dc4f2b"
  },
  {
    "url": "toolDoc/Vim/Vim.html",
    "revision": "a3386dc17e7f00e66ca5d7b5e189413f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
