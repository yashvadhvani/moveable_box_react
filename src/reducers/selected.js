import { SELECT_SQUARE } from '../actions/squares'

const selected = (state = 0, action) => {
  switch (action.type) {
    case SELECT_SQUARE: {
      return action.zIndex
    }
    default:
      return state;
  }
}

export default selected;