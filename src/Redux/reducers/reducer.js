import { combineReducers } from "redux";
import authReducers from "./authReducer";
import repoReducers from "./repoReducer";

const reducers = combineReducers({
  authReducers,
  repoReducers,
});
export default reducers;
