import { SET_ZINDEX } from '../actions/zIndex'

const zIndex = (state = 0, action) => {
  switch (action.type) {
    case SET_ZINDEX: {
      return state + 1;
    }
    default:
      return state;
  }
}

export default zIndex;