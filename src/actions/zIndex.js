const SET_ZINDEX = 'SET_ZINDEX';
const RESET_ZINDEX = 'RESET_ZINDEX';
const DECREMENT_ZINDEX = 'DECREMENT_ZINDEX'
const setZIndex = () => ({
  type: SET_ZINDEX,
})

const resetZIndex = () => ({
  type: RESET_ZINDEX,
})

const decrementZIndex = () => ({
  type: DECREMENT_ZINDEX,
})

export {
  SET_ZINDEX,
  RESET_ZINDEX,
  DECREMENT_ZINDEX,
  setZIndex,
  resetZIndex,
  decrementZIndex
}