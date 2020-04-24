import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  SEARCH_HOT_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  PAGE_CHANGE
} from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const actionSearchFocus = () => {
  return {
    type: SEARCH_FOCUS,
    focused: true
  }
}

export const actionSearchBlur = () => {
  return {
    type: SEARCH_BLUR,
    focused: false
  }
}

export const actionMouseEnter = () => {
  return {
    type: MOUSE_ENTER,
    mouseIn: true
  }
}

export const actionMouseLeave = () => {
  return {
    type: MOUSE_LEAVE,
    mouseIn: false
  }
}

export const actionPageChange = page => {
  return {
    type: PAGE_CHANGE,
    page
  }
}

export const getList = () => {
  return dispatch => {
    axios({
      url: '/apis/headerList.json',
      method: 'get'
    }).then(res => {
      if (res.data.status === "success") {
        dispatch(actionSearchList(res.data.list))
      }
    })
  }
}

const actionSearchList = list => {
  return {
    type: SEARCH_HOT_LIST,
    list: fromJS(list),
    totalPage: Math.ceil(list.length/10)
  }
}