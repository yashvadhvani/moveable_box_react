import { decrementZIndex, resetZIndex, setZIndex } from './zIndex'
import { addSquare, selectSquare, deleteAllSquare, resetSelection,
deleteSquare } from './squares'
import { setSelected } from './selected'


const colorCode = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

const handleAdd = () => (dispatch, getState) => {
  dispatch(setZIndex());
  const { zIndex } = getState();
  dispatch(addSquare({
    zIndex,
    borderColor: colorCode[zIndex % 7]
  }))
}

const handleSelect = (zIndex) => (dispatch, getState) => {
  dispatch(setSelected(zIndex));
  const { selected } = getState();
  dispatch(selectSquare({ borderStyle : "solid" }, selected))
}

const handleDelete = () => (dispatch, getState) => {
  const { selected } = getState();
  dispatch(setSelected(null));
  dispatch(deleteSquare(selected));
  const { squares } = getState();
  if(!squares || Object.keys(squares).length === 0) {
    dispatch(resetZIndex());
  } else {
    dispatch(decrementZIndex())
  }
}

const handleDeleteAll = () => (dispatch) => {
  dispatch(setSelected(null));
  dispatch(resetZIndex(0));
  dispatch(deleteAllSquare())
}

const handleResetSelection = () => (dispatch) => {
  dispatch(setSelected(null));
  dispatch(resetSelection())
}
export {
  handleAdd,
  handleSelect,
  handleDelete,
  handleDeleteAll,
  handleResetSelection
}