import axios from 'axios';

const baseUrl = 'http://localhost:8080/codeCheck'
axios.create({
  baseUrl: baseUrl,
  timeout: 5000,
})

const errorHandle = (error) => {
  if (error.response.status) {
    switch (error.response.status) {
      case '401':
        //处理
        break;
      case '500':
        //处理
        break;
      default:
        // 全局提示
        return Promise.reject(error.response)
    }
  }
}

// 全局拦截异常处理
axios.interceptors.response.use(response => {
  return response
}, errorHandle)

