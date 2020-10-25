const ADD_SQUARE = 'ADD_SQUARE';
const DELETE_SQUARE = 'DELETE_SQUARE';
const DELETE_ALL_SQUARE = 'DELETE_ALL_SQUARE';
const SELECT_SQUARE = 'SELECT_SQUARE';
const MOVE_SQUARE = 'MOVE_SQUARE';
const RESET_SELECTION = 'RESET_SELECTION';


const addSquare = (style) => ({
  type: ADD_SQUARE,
  style
})

const deleteSquare = (selected) => ({
  type: DELETE_SQUARE,
  selected
})

const selectSquare = (style, selected) => ({
  type: SELECT_SQUARE,
  style,
  selected
})

const resetSelection = (style, selected) => ({
  type: RESET_SELECTION,
})

const moveSquare = (style, selected) => ({
  type: MOVE_SQUARE,
  style,
  selected
})

const deleteAllSquare = () => ({
  type: DELETE_ALL_SQUARE,
})

const handleKey = (key) => (dispatch, getState) => {
  const { squares, selected } = getState();
  if (selected) {
    const selectedSquare = squares[selected];
    console.log(selectedSquare)
    const top = parseInt(selectedSquare.top.substring(0, selectedSquare.top.length - 2), 10);
    const left = parseInt(selectedSquare.left.substring(0, selectedSquare.left.length - 2), 10);
    switch (key) {
      case 'w':
      case 'W':
      case 'ArrowUp':
        if (top > 0) {
          dispatch(moveSquare({
            top: `${top - 5}px`,
            left: selectedSquare.left,
          },
            selected
          ))
        }
        break;
      case 's':
      case 'S':
      case 'ArrowDown':
        //Dedudcted 10px : 5px for box border 5px for fence border 
        if (top + 200 < 800 -10) {
          dispatch(moveSquare({
            top: `${top + 5}px`,
            left: selectedSquare.left,
          },
            selected
          ))
        }
        break;
      case 'a':
      case 'A':
      case 'ArrowLeft':
        if (left > 0) {
          dispatch(moveSquare(
            {
              left: `${left - 5}px`,
              top: selectedSquare.top,
            },
            selected
          ))
        }
        break;
      case 'd':
      case 'D':
      case 'ArrowRight':
        if (left + 200 < 1800 - 10) {
          dispatch(moveSquare({
            left: `${left + 5}px`,
            top: selectedSquare.top,
          },
            selected
          ))
        }
        break;
      default:
        break;
    }
  } else {
    if (["w", "W", "ArrowUp", "s", "S", "ArrowDown", "a", "A", "ArrowLeft", "d", "D", "ArrowRight", "Delete"].includes(key)
      && Object.keys(squares)
    )
      alert('Please Select a box first')
  }
}

export {
  ADD_SQUARE,
  DELETE_SQUARE,
  SELECT_SQUARE,
  MOVE_SQUARE,
  DELETE_ALL_SQUARE,
  RESET_SELECTION,
  addSquare,
  deleteSquare,
  selectSquare,
  handleKey,
  deleteAllSquare,
  resetSelection
}