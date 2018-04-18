import { combineReducers } from "redux";
import block from "./block";
import log from "./log";

const rootReducer = combineReducers({
  block,
  log
});
export default rootReducer;
