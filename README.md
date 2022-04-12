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
# 接口统一管理
```

```
# nprogress进度条的使用





