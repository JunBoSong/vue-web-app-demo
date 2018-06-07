import axios from 'axios'
import Vue from 'vue'
// API接口统一管理文件
import API from './api'
// 公共参数配置文件
import { Host, APPID } from '@/config'

export const httpGet = (url) => {
  const [urlKeys, params] = url.split('?')
  const [key1, key2] = urlKeys.split('/')

  axios({
    url: `${API[key1][key2]}?${params}}`,
    method: 'get'
  })
}

export const httpPost = (url, params) => {
  const [key1, key2] = url.split('/')
  return axios({
    url: API[key1][key2],
    method: 'post',
    data: {
      appId: APPID,
      ...params
    }
  })
}

/**
 **上传接口**
 **/
const newAxios = axios.create({
  transformRequest: [(data) => {
    return data
  }]
})

export const $httpImgUpoad = (params) => newAxios({
  url: API.upload.file,
  method: 'post',
  data: params
})

// axios 全局配置
axios.defaults.baseURL = Host
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout = 30000
axios.defaults.transformRequest = [(data) => {
  return JSON.stringify(data)
}]
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log('request:', config)
  // 打开loading
  Vue.$loading.open()

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  // console.log(response)
  // 关闭loading
  Vue.$loading.close()

  return response.data
}, (error) => {
  Vue.$loading.close()
  if (error) throw error
})
