import { setZIndex } from './zIndex'
import { addSquare } from './squares'

const colorCode = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"];

const handleSelect = () => (dispatch, getState) => {
  dispatch(setZIndex());
  const { zIndex } = getState();
  dispatch(addSquare({
    zIndex,
    borderColor: colorCode[zIndex % 7]
  }))
}

export {
  handleSelect,
}