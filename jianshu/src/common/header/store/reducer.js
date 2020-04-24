import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  SEARCH_HOT_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  PAGE_CHANGE
} from './actionTypes'
import { fromJS } from 'immutable'

// fromJS能够将一个js对象转换为不可变对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state=defaultState, action) => {
  // immutable里面的set实际上是通过传入的参数进行对比，返回一个新的对象，并不是直接修改state
  // 当需要同时修改多个数据时，可以使用merge
  switch (action.type) {
    case SEARCH_FOCUS: 
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case SEARCH_HOT_LIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouseIn', true)
    case MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case PAGE_CHANGE:
      return state.set('page', action.page)
    default:
      return state
  }
}