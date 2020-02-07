import axios from 'axios';
import { Message, MessageBox } from 'element-ui';

//自定义axios实例
const serve = axios.create({
    baseURL: API_URL, // 后端接口根路径
    timeout: 60 * 1000, // 请求超时时间
})

// 添加请求拦截器
axios.interceptors.request.use((config) =>{
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    Message({
        type:'error',
        message:error.message,
        duration: 5 * 1000,
    })
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data;
    // 600表示token异常需要重新登录
    if (res.code === 600) {
      Message({
        message: '账号已过期，重新登录。',
        type: 'error',
        duration: 1000,
      });
      return Promise.reject();
    } if (res.code === 602) {
      // 开发阶段参数异常
      MessageBox.alert(`状态码：602，原因：${res.message}`, '接口参数异常', {
        confirmButtonText: '我知道了',
        type: 'warning',
        showClose: false,
      });
    } else if (res.code === 500) {
      // 极端情况服务器错误
      MessageBox.alert(`状态码：500，原因：${res.message}`, '服务器错误', {
        confirmButtonText: '我知道了',
        type: 'warning',
        showClose: true,
      });
    } else if (res.code === 400) {
      // 业务失败情况统一拦截
      MessageBox.alert(`原因：${res.message}`, '操作失败', {
        confirmButtonText: '我知道了',
        type: 'warning',
        showClose: true,
      });
    }
    return res;
  }, function (error) {
    // 对响应错误做点什么
    Message({
        type:'error',
        message:error.message,
        duration: 5 * 1000,
    })
    return Promise.reject(error);
  });