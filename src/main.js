import Vue from 'vue'
import App from './App.vue'
// 全局组件
import TypeNav from '@/pages/Home/TypeNav'
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false
// 引入路由
import router from '@/router'
import {reCategoryList} from '@/api'
reCategoryList();
new Vue({
  // 注册路由
  router,
  render: h => h(App),
}).$mount('#app')
