# 取消eslint语法检查
## 如果不取消 哪怕一个变量没使用也会报错，eslint一般是项目写完在开启
```
在vue.cofig.js加入
module.exports={
  lintOnSave:false
}
```
---
# 路由传参
```
params参数:在地址后加/参数，需要在路由配置时占位，如path：'/home/x，在$route.params里
query参数：地址后加？参数名=参数值的形式,不需要占位，在$route.query里
最常用写法：对象写法 this.$router.push({name:'路由名',params:{keyword:this.keyword},query:{keyword:this.keyword}})

```
**对象写法需要为路由命名**</br>
<font color='red'>面试题：1对象写法中path可用与params一起使用吗：不可以 </font></br>
<font color='red'> 面试题2如何指定params可传可不传：在配置路由时在占位后加一个？，参考正则表达式 </font></br>
<font color='red'> **面试题3：如果params传的是空怎么办：使用undefind解决，传参的时候params：{keywor：thiskeyword||undefined</font></br>
***

# 多次点击错误
## Avoided redundant navigation to current location: "/search?keyword="
```
当多次点击并通过编程式路由跳转会发生，指令式跳转没有，脚手架3已经修复了
1.通过给push方法添加成功和失败的回调解决
this.$router.push({name:'路由名',params:{keyword:this.keyword},query:{keyword:this.keyword},()=>{},()=>{}})
但这种方法治标不治本
2.最好重写VueRouter.prototype.push:
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
```

# axios二次封装
## 请求拦截器，响应拦截器：在发请求和数据返回前后处理一些业务
```
项目中api文件夹一般是放axios请求的
```
# 接口统一管理,配置代理服务器
```
把跳转的步骤封装为一个函数，使用时直接调用函数


```
# nprogress进度条的使用
```
写在axios复写中
```

# Vuex状态管理库
```
模块式开发

```


# 防抖和节流
```
当用户快速触发多个事件，但浏览器反应不过来，导致只有一部分触发
节流：快速的连续触发变为少量触发
防抖：前面的事件都被取消，只有最后一次在规定时间后触发
可用olodash包解决问题，使用那npm下载，不会看中文文档，在脚手架自动已经引入了
_.throttle函数节流，_.debounce函数防抖
```
# 从三级目录向search跳转如何识别是否是点击a节点而不是其他节点，如何辨别点击的链接是哪一级
```
gei每一个a节点配置一个自定义属性，点击后获得target，通过dataset函数获得，
如果存在就代表是a节点
同时配置一个data-id1/2/3自定义属性，id是123判断路由
*配置路由时
let location={name:'search'}
 let query={categoryName:categoryname}
 location.query=query
this.$router.push(location)是非常好的办法
```
# mockjs模拟数据
```
mock.js 生成随机数据，拦截ajax请求
1.在src创建mock文件夹
2.准备json数据,在mock建立相应的json文件，格式化一下，不要留有空格
3.需要的图片放在public
4.开始mock，在mockserve.js
5.在入口文件引入

```
#  swiper 轮播图
```
安装Swiper插件5版本
$nexttick函数，经常和插件一起使用，因为其他插件经常操作dom
```

# 将首页轮播图注册为全局组件


# 


