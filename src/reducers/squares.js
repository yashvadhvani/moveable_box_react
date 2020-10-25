import { DELETE_SQUARE, ADD_SQUARE, MOVE_SQUARE } from '../actions/squares'

const squares = (state = {}, action) => {
  switch (action.type) {
    case ADD_SQUARE:
      return {
        ...state,
        [action.style.zIndex]: {
          top: '0px',
          left: '0px',
          ...action.style
        }
      };

    case DELETE_SQUARE: {
      const newState = {
        ...state
      }
      delete newState[action.selected]
      return newState;
    }
    case MOVE_SQUARE: {
      console.log(action)
      return {
        ...state,
        [action.selected]: {
          ...state[action.selected],
          ...action.style
        }
      }
    }
    default:
      return state;
  }
}

export default squares;