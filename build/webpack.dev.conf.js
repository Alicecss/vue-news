'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const datas=require('../news/toutioa')
const news=datas.result.data
const loves=require("./../loves.json")
const fire=require("./../news/fire.json")
const guoji=require("./../news/guoji.json")
const guonei=require("./../news/guonei.json")
const luye=require("./../news/luye.json")
const shehui=require("./../news/shehui.json")
const tiyu=require("./../news/tiyu.json")
const toutiao=require("./../news/toutioa.json")
const guangzhou=require("./../news/guangzhou.json")
const shenzhen=require("./../news/shenzhen.json")

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app){
      app.get('/api/fire',function (req,res) {
       res.json({
       erron:0,
       data:fire
       })
       });
      app.get('/api/guoji',function (req,res) {
        res.json({
          erron:0,
          data:guoji
        })
      });
      app.get('/api/guonei',function (req,res) {
        res.json({
          erron:0,
          data:guonei
        })
      });
      app.get('/api/luye',function (req,res) {
        res.json({
          erron:0,
          data:luye
        })
      });
      app.get('/api/shehui',function (req,res) {
        res.json({
          erron:0,
          data:shehui
        })
      });
      app.get('/api/tiyu',function (req,res) {
        res.json({
          erron:0,
          data:tiyu
        })
      });
      app.get('/api/toutiao',function (req,res) {
        res.json({
          erron:0,
          data:toutiao
        })
      });
        app.get('/api/loves',function(req,res){
          res.json({
            erron:0,
            data:loves
          })
        });
      app.get('/api/guangzhou',function(req,res){
        res.json({
          erron:0,
          data:guangzhou
        })
      });
      app.get('/api/shenzhen',function(req,res){
        res.json({
          erron:0,
          data:shenzhen
        })
      })
      /*app.get('/api/news',function(req,res){

        res.json({
          errno:0,
          data:news
        })
      })*/
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
