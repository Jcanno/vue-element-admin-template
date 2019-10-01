'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  devServer: {},
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
    },
  },
  //配置目录别名
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
  },
};
