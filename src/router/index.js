import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
// 引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 解决多次点击跳转路由报错问题
// 备份push
let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
// 重写push
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{ console.log('沙雕，别点了')})
    }
}
// 重写replace
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }

        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{
                showFooter:true
            }

        },
        {
            path:'/login',
            component:Login,
            meta:{
                showFooter:false
            }

        },
        {
            path:'/register',
            component:Register,
            meta:{
                showFooter:false
            }

        },
        // 重定向，定位到首页
        {
            path:'*',
            component:Home,
            redirect:'/home',
            meta:{
                showFooter:true
            }
        }
    ]
})