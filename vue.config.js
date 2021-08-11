/* eslint-disable no-undef */
'use strict';
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack (config){
    const ga=process.env.VUE_APP_GA;
    // 通过 html-webpack-plugin注入到 index.html之中
    config.plugin('html').tap(args => {
      args[0].ga = ga;
      return args;
    });
    // split chunks optimization
    config.when(process.env.NODE_ENV==='production',config=>{
      config
        .optimization.splitChunks({
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // only package third parties that are initially dependent
            },
            elementUI: {
              name: 'chunk-elementUI', // split elementUI into a single package
              priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
              test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'), // can customize your rules
              minChunks: 3, //  minimum common number
              priority: 5,
              reuseExistingChunk: true
            }
          }
        });
    });
  }
};