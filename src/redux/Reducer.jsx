import { combineReducers } from "redux";
import Auth from "./reducer/AuthReducer";
import List from "./reducer/ListReducer";

const reducers = {
  Auth,
  List,
};
export const rootReducer = combineReducers(reducers);
