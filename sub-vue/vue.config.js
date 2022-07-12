const { name } = require('./package');
module.exports =  {
  // publicPath: '/app-vue',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: 'zb.jd.com',
    port: 9001,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args)  => {
      args[0].title = 'vue项目子系统';
      return args;
    })
  }
}