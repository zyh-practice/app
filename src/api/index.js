// 进行api接口的统一管理
import requests from "./request"
import mockRequest from './mockAjax'
// 三级联动接口
export const reCategoryList=(()=>{
    // 返回结果是promise对象
   return requests({url:'/product/getBaseCategoryList',method:'get'})
})
// banner
export const reqGetBanneList=()=>mockRequest.get('/banner')
// floor
export const reqFloorList=()=>mockRequest.get('/floor')

// 获取search模块数据,z这个api需要传对象，parasm至少是空对象
export const  reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})



