import Vue from 'vue'
import App from './App.vue'
// 全局组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false
// 引入路由
import router from '@/router'
import {reCategoryList} from '@/api'
reCategoryList();
// 引入vuex
import store from '@/store/index'
new Vue({
  // 注册路由
  router,
  // 注册vuex
  store,
  render: h => h(App),
}).$mount('#app')
