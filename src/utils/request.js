import axios from "axios";
import qs from 'qs'
const instance = axios.create({
    baseURL: 'http://vueshop.glbuys.com',
    timeout: 10000,
});


// 添加请求拦截器dd
instance.interceptors.request.use(function (config) {
    //console.log('拦截',config);
    // 在发送请求之前做些什么
      // 对响应数据做点什么
      if(config.data && !(config.data  instanceof FormData)){
        config.data = qs.stringify(config.data)
    }
    config.params ={
        ...config.params,
        token:"1ec949a15fb709370f"
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器222
instance.interceptors.response.use(function (response) {
    
  
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance









