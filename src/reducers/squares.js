import { DELETE_SQUARE, ADD_SQUARE, MOVE_SQUARE, SELECT_SQUARE, DELETE_ALL_SQUARE, RESET_SELECTION } from '../actions/squares'

const setBorderStyle = (newState) =>{
  Object.keys(newState).forEach((element) => {
    newState[element]= {
      ...newState[element],
      "border-style": "dotted"
    }
  })
}
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
    case SELECT_SQUARE: {
      const newState = { ...state }
      setBorderStyle(newState);
      newState[action.selected] = {
        ...newState[action.selected],
        ...action.style
      }
      return newState;
    }
    case MOVE_SQUARE: {
      return {
        ...state,
        [action.selected]: {
          ...state[action.selected],
          ...action.style
        }
      }
    }
    case RESET_SELECTION: {
      const newState = { ...state }
      setBorderStyle(newState);
      return newState;
    }
    case DELETE_ALL_SQUARE: {
      return {}
    }
    default:
      return state;
  }
}

export default squares;