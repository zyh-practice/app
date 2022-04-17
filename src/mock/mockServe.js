import Mock from 'mockjs'
// webpack 默认暴露：图片，json数据格式，
import banner from './banner'
import floor from './floor'
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})