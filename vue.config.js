const path = require('path');

module.exports = {
  lintOnSave: false,
  outputDir: './examples-dist',
  publicPath: './',
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './examples/main.js'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './examples'),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './examples'));

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        const conf = options;
        conf.compilerOptions.preserveWhitespace = true;
        return conf;
      });
  },
};
