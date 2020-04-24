import {
  SEARCH_FOCUS,
  SEARCH_BLUR
} from '../../../store/actionTypes'

const defaultState = {
  focused: false
}

export default (state=defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SEARCH_FOCUS: 
      newState.focused = true
      return newState
    case SEARCH_BLUR:
      newState.focused = false
      return newState
  }
  return state
}