const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方式一
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
  // 方式二
  devServer: {
    proxy: {
      "/student": {
        target: 'http://localhost:3000', // 注意只写url
        // ws: true,
        // changeOrigin: true // 用于控制请求头中的host值
      },
      "/cars": {
        target: 'http://localhost:3001'
      }
    }
  }
})
