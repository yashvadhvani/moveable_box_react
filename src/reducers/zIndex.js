import { RESET_ZINDEX, SET_ZINDEX, DECREMENT_ZINDEX } from '../actions/zIndex'

const zIndex = (state = 0, action) => {
  switch (action.type) {
    case SET_ZINDEX: {
      return state + 1;
    }
    case RESET_ZINDEX: {
      return 0;
    }
    case DECREMENT_ZINDEX : {
      return state ? state - 1 : state;
    }
    default:
      return state;
  }
}

export default zIndex;