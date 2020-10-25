const ADD_SQUARE = 'ADD_SQUARE';
const DELETE_SQUARE = 'DELETE_SQUARE';
const SELECT_SQUARE = 'SELECT_SQUARE';
const MOVE_SQUARE = 'MOVE_SQUARE';


const addSquare = (style) => ({
  type: ADD_SQUARE,
  style
})

const deleteSquare = (selected) => ({
  type: DELETE_SQUARE,
  selected
})

const selectSquare = (zIndex) => ({
  type: SELECT_SQUARE,
  zIndex
})

const moveSquare = (style, selected) => ({
  type: MOVE_SQUARE,
  style,
  selected
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
        if (top + 200 < 790) {
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
        if (left + 200 < window.innerWidth - 40) {
          dispatch(moveSquare({
            left: `${left + 5}px`,
            top: selectedSquare.top,
          },
            selected
          ))
        }
        break;
      case 'Delete':
        dispatch(deleteSquare(selected))
        break;
    }
  }
}

export {
  ADD_SQUARE,
  DELETE_SQUARE,
  SELECT_SQUARE,
  MOVE_SQUARE,
  addSquare,
  deleteSquare,
  selectSquare,
  handleKey
}