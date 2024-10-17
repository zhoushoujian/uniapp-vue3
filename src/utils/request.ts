import Request, { HttpData, HttpFormData, HttpMethod, HttpParams, HttpRequestHeader, HttpResponse } from 'luch-request'
import { getBaseUrl } from '@/constants/config'
import { getEnv, logger } from '@/utils/lib'

const http = new Request()

const getHeader = () => {
  const headers = { Authorization: '' }
  const accessToken = uni.getStorageSync('token')
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }
  return headers
}

http.interceptors.request.use(
  (config) => {
    const env = getEnv()
    config.baseURL = getBaseUrl(env)
    config.header = getHeader()
    config.timeout = 35000
    return config
  },
  (config) => {
    // 可使用async await 做异步操作
    return Promise.reject(config)
  },
)

http.interceptors.response.use(
  //@ts-ignore
  (response: HttpResponse<any, any>) => {
    logger.warn('h5 api response', (response.config as any).fullPath, response.data)
    if (response.statusCode === 401) {
      uni.showToast({
        title: 'token已过期重新登录',
        icon: 'none',
        duration: 1000,
      })
      return
    } else if (response.statusCode === 403) {
      uni.showToast({
        title: '接口无权限',
        icon: 'none',
        duration: 1000,
      })
      return
    } else if (response.statusCode === 400) {
      uni.showToast({
        title: response?.data?.message,
        icon: 'none',
        duration: 1000,
      })
      return
    } else if (response.statusCode >= 500) {
      uni.showToast({
        title: '服务器错误',
        icon: 'none',
        duration: 1000,
      })
      return
    }
    return response
  },
  (response) => {
    logger.error('h5 api response fail: ', (response.config as any).fullPath, response.data)
    if (response?.data?.code === 401) {
      uni.showToast({
        title: 'token已过期重新登录',
        icon: 'none',
        duration: 1000,
      })
    } else if (response?.data?.code === 400) {
      uni.showToast({
        title: response?.data?.message,
        icon: 'none',
        duration: 1000,
      })
    } else if (response?.data?.code === 403) {
      uni.showToast({
        title: '接口无权限,请联系管理员',
        icon: 'none',
        duration: 1000,
      })
    } else {
      uni.showToast({
        title: response?.data?.error_description || response?.data?.message || response?.data,
        icon: 'none',
        duration: 1000,
      })
    }
    return Promise.reject(response)
  },
)

const request = (options: {
  url: string
  method: HttpMethod
  header?: HttpRequestHeader
  dataType?: string
  data?: HttpData
  params?: HttpParams
  formData?: HttpFormData
}) => {
  const { url } = options
  return new Promise((resolve, reject) => {
    logger.log('h5 api request options', options)
    const defaultHeaders = getHeader()
    http
      .request({
        url, // 接口地址：前缀+方法中传入的地址
        method: options.method || 'GET', // 请求方法：传入的方法或者默认是“GET”
        sslVerify: false,
        header: Object.assign(
          {
            'content-type': 'application/json',
          },
          defaultHeaders,
          options.header,
        ),
        dataType: options.dataType || 'json',
        data: options.data || {}, // 传递参数：传入的参数或者默认传递空集合
        params: options.params || {},
        formData: options.formData || {},
      })
      .then((res) => {
        resolve(res?.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default request
