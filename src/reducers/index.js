import { combineReducers } from 'redux'
// import { List, fromJS } from 'immutable'

//首页得文字
export function red_index_tit (state = '上面一旦重新填我就变了', action) {
  switch (action.type) {
    case 'INDEX_TIT':
      return action.data
    default:
      return state
  }
}
//标题
export function red_head_tit (state = 'react_home', action) {
  switch (action.type) {
    default:
      return state
  }
}
export function red_list (state = [], action) {
  switch (action.type) {
    case 'LIST':
      return action.data
    default:
      return state
  }
}
// 用户信息
export function userInfo (state = {}, action) {
  switch (action.type) {
    case 'ADD':
      return action.data
    default:
      return state
  }
}
// 用户信息
export function checkList (state = {}, action) {
  switch (action.type) {
    case 'CHECK':
      return action.data
    default:
      return state
  }
}
const rootReducer = combineReducers({
  red_index_tit,
  red_head_tit,
  red_list,
  userInfo,
  checkList
})

export default rootReducer
