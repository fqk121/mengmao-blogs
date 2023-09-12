// 使用严格模式
'use strict'
const path = require('path')
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    proxyTable: {
    	'/': {
        // target: 'http://localhost:8888',
		    target: 'https://a78582g914.zicp.fun',
        changeOrigin: true,
        // 以'^/'开头的请求使用proxy代理
        pathRewrite: {
          '^/': ''
        }
      }
    },
    // 开发服务器的配置
    host: 'localhost', 
    port: 8080, 
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 
    // 开发环境下的源代码映射配置
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
  },
  build: {
    // 生成的index.html文件的路径
    index: path.resolve(__dirname, '../dist/index.html'),
    // 打包生成文件的根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
