const SELECT_SQUARE = 'SELECT_SQUARE';

const setSelected = (zIndex) => ({
  type: SELECT_SQUARE,
  zIndex
})

export {
  SELECT_SQUARE,
  setSelected
}