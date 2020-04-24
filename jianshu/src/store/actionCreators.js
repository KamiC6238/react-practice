import {
  SEARCH_FOCUS,
  SEARCH_BLUR
} from './actionTypes'

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