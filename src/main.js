import Vue from 'vue'
import App from './App.vue'
// 全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.config.productionTip = false
// 引入路由
import router from '@/router'
import {reCategoryList} from '@/api'
reCategoryList();
// 引入vuex
import store from '@/store/index'
// 引入mock
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
new Vue({
  // 注册路由
  router,
  // 注册vuex
  store,
  render: h => h(App),
}).$mount('#app')
