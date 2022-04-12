// 进行api接口的统一管理
import requests from "./request"

// 三级联动接口
export const reCategoryList=(()=>{
    // 返回结果是promise对象
   return requests({url:'/product/getBaseCategoryList',method:'get'})
})

