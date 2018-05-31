'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // 新闻 聚合数据 key：939994f1f415919a9348ba7d7f5b1b93 target：http://v.juhe.cn/toutiao/index?type=top&key=APPKEY
      "/api":{
        target:"http://v.juhe.cn/toutiao/index?type= ",
        changeOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      },
      // 菜谱  http://api.avatardata.cn/Cook/List?key=a45059e7a75d41d38a2086d19562fdc0&page=2&rows=20
      "/c2":{
        target:"http://api.avatardata.cn/Weather/Query?key=80881b9999864a9481a4687875c6b3a2&cityname=武汉",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"c2"
        }
      },
      // 手机吉凶
      "/v2":{
        target:" http://v1.avatardata.cn/JiXiong/LookUp?key=9c8ea4b7f4294f188525ec7a7f8c4060&keyword=",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"/v2"
        }
      },
      // 邮政编码
      "/z2":{
        target:"http://v1.avatardata.cn/JiXiong/LookUp?key=9c8ea4b7f4294f188525ec7a7f8c4060&keyword=",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"/z2"
        }
      },
      // 手机归属地
      "/m2":{
        target:" http://api.avatardata.cn/MobilePlace/LookUp?key=c57d4494bb9d429db522508751363a4f&mobileNumber=13021671512",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"/m2"
        }
      },
      // 热点 推荐
      "/R2":{
        target:" http://api.avatardata.cn/ActNews/Query?key=488a284002e142ce9a3998dbc90004e0&keyword=",
        changeOrigin:true,
        pathRewrite:{
          "^/api":"/R2"
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
