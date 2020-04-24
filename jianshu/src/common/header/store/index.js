import reducer from './reducer'
import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_HOT_LIST, MOUSE_ENTER, MOUSE_LEAVE, PAGE_CHANGE } from './actionTypes'
import { actionSearchFocus, actionSearchBlur, actionMouseEnter, actionMouseLeave, actionPageChange, getList } from './actionCreators'

// 将index.js作为总的出口，这样外部只需通过common/header/store即可导入所有的内容
export {
  reducer,
  SEARCH_FOCUS,
  SEARCH_BLUR,
  SEARCH_HOT_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  PAGE_CHANGE,
  actionSearchFocus,
  actionSearchBlur,
  actionMouseEnter,
  actionMouseLeave,
  actionPageChange,
  getList
}