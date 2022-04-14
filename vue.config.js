const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports={
  lintOnSave:false,
  // 配置代理
  devServer:{
    proxy:{
      'api':{
        target:'http://39.98.123.211',
        // pathRewrite:{'^/api':''},
      },
      
    }
  }
}
