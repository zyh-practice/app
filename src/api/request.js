// 对axios二次封装
import axios  from "axios";

// 引入进度条样式
import 'nprogress/nprogress.css'
// 引入进度条,start:开始,done:结束
import nprogress from "nprogress";


// 利用axios方法create，创建axios实例
// request就是axios只不过稍微配置一下
const requests=axios.create({
    // 基础路径,发请求,路径会自动带上api
    baseURL:'/api',
    // 请求超时时间5s
    timeout:5000,
});

// 请求拦截器
requests.interceptors.request.use((config)=>{
//    进度条开始
    nprogress.start()      
    return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功回调
    // 进度条介绍
    nprogress.done()
    return res.data;
},(err)=>{
    //  失败回调
    return Promise.reject(new Error('false'))
})

export default requests