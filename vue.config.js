// 这个文件是vue-cli创建出来的项目配置文件
// 在vue.config.js这个配置文件中 可以对整个项目的打包 构建进行全局性的配置
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'
})
