const { defineConfig } = require('@vue/cli-service')
let externals = {}
let cdn = {
  css: [],
  js: []
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
      // 如果是生产环境 就排除打包 否则不排除
      externals = {
        vue: 'Vue',
        'cos-js-sdk-v5': 'cos-js-sdk-v5',
        vuex: 'Vuex'
        // 'vue-router': 'VueRouter'
      // 'vue-lazyload': 'VueLazyload'
      }
      cdn = {
        css: [], // 放置css文件目录
        js: [
          // cos-js-sdk-v5腾讯云存储桶
          'https://cdn.jsdelivr.net/npm/cos-js-sdk-v5/dist/cos-js-sdk-v5.min.js',
          // vue
          'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js',
          // VueX
          'https://cdn.bootcss.com/vuex/3.6.2/vuex.min.js'
          // // VUelazyload
          // 'https://cdn.bootcdn.net/ajax/libs/vue-lazyload/1.3.4/vue-lazyload.min.js',
          // Vuerouter
          // 'https://cdn.bootcss.com/vue-router/3.5.1/vue-router.js'
        ] // 放置js文件目录
      }
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  },
  configureWebpack: {
    externals: externals
  }
})
