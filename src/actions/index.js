import { getData, postData } from '../utils/http'
import { notification } from 'antd'
import NProgress from 'nprogress'
import { val_empty } from 'esn'

export function act_index_tit (data) {
  return {
    type: 'INDEX_TIT',
    data: data
  }
}
export function act_list (data) {
  return {
    type: 'LIST',
    data: data
  }
}
export function actions_userInfo (data) {
  return {
    type: 'ADD',
    data: data
  }
}
export function actions_checkList (data) {
  return {
    type: 'CHECK',
    data: data
  }
}

//整合的一个get请求
export const post = (url = '', parm = {}, callBack = function () {
}, erro = () => { }) => async (dispatch, getState) => {
  try {
    NProgress.start()
    let response = await postData(url, parm)
    //await console.log(response.data)
    await function (response) {
      if (val_empty(response.data)) {
        callBack(response, dispatch, getState)
      } else {
        erro()
        notification['error']({
          message: '警告',
          description: response.data.errorMsg
        })
        callBack(null, dispatch, getState)
      }
      NProgress.done()
    }(response)
  } catch (error) {
    console.log('error: ', error)
    callBack(null, dispatch, getState)
  }
}
export const get = (url = '', parm = {}, callBack = function () {
}, erro = () => { }) => async (dispatch, getState) => {
  try {
    NProgress.start()
    let response = await getData(url, parm)
    //await console.log(response.data)
    await function (response) {
      if (val_empty(response.data)) {
        callBack(response, dispatch, getState)
      } else {
        erro()
        notification['error']({
          message: '警告',
          description: response.data.errorMsg
        })
        callBack(null, dispatch, getState)
      }
      NProgress.done()
    }(response)
  } catch (error) {
    console.log('error: ', error)
    callBack(null, dispatch, getState)
  }
}
