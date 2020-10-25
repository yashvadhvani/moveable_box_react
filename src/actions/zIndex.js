const SET_ZINDEX = 'SET_ZINDEX';
const RESET_ZINDEX = 'RESET_ZINDEX';

const setZIndex = () => ({
  type: SET_ZINDEX,
})

const resetZIndex = () => ({
  type: RESET_ZINDEX,
})
export {
  SET_ZINDEX,
  RESET_ZINDEX,
  setZIndex,
  resetZIndex
}