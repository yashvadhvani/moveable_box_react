import { SET_SELECTED } from '../actions/selected'

const selected = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED: {
      return action.zIndex
    }
    default:
      return state;
  }
}

export default selected;