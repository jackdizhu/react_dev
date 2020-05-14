import axios from 'axios'

export let instance = axios.create({
  // baseURL: API_URL, //设置默认api路径
  timeout: 3000, //设置超时时间
  headers: { 'content-type': 'application/json' }
})

export const fetch = (config = {}) => {
  return instance(config)
}

export const getData = (url, params = {}) => {
  return instance.get(`${url}`, { params })
}

export const postData = (url, data = {}) => {
  return instance.post(`${url}`, data)
}
export const get = getData
export const popst = postData
