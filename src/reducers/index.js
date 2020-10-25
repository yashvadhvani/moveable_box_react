import { combineReducers } from "redux";
import squares from './squares'
import selected from './selected'
import zIndex from './zIndex'


export default combineReducers({
  squares,
  selected,
  zIndex,
})