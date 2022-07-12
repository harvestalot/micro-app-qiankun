module.exports = {
  devServer: {
    host: 't.jd.com',
    port: 9000
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args)  => {
      args[0].title = '乾坤主项目基座';
      return args;
    })
  }
}