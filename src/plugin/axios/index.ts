import Axios, { AxiosRequestConfig } from 'axios'

const http = Axios.create({
  baseURL: 'http://api.wangfanghua.top:7300/mock/5ee981b8216d1377dea9bedf/example',
  timeout: 5000,
  timeoutErrorMessage: 'api接口请求失败'
})

const requestSuccessCallBack =  (value: AxiosRequestConfig):
  Promise<AxiosRequestConfig> |
  AxiosRequestConfig => {
  value.headers.token = ''
  return value;
}

const requestErrorCallBack = (error: Error): void => {
  throw error
}

http.interceptors.request.use(requestSuccessCallBack, requestErrorCallBack)

/**
 * 请求成功回调
 * @param success 回调结果
 */
const responseSuccessCallBack = (success: any) => {
  console.log(success)
  return success.data;
}

/**
 * 请求失败的回调
 */
function responseErrorCallBack (error: any): Promise<any> {
  const statusCode = error.response.status
  switch (statusCode) {
    case 400: error.message = '请求错误'; break
    case 401: error.message = '未授权，请登录'; break
    case 403: error.message = '拒绝访问'; break
    case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
    case 408: error.message = '请求超时'; break
    case 500: error.message = '服务器内部错误'; break
    case 501: error.message = '服务未实现'; break
    case 502: error.message = '网关错误'; break
    case 503: error.message = '服务不可用'; break
    case 504: error.message = '网关超时'; break
    case 505: error.message = 'HTTP版本不受支持'; break
    default: error.message = '未知错误'; break
  }
  return Promise.reject(error)
}

http.interceptors.response.use(responseSuccessCallBack, responseErrorCallBack)

export default http;
