import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";
import commonReducer from "./reducers/commonReducer";
import SearchReducer from "./reducers/SearchReducer";
import CustomReducer from "./reducers/CustomReducer";
import ListTCReducer from "./reducers/ListTCReducer.js";
const rootReducer = combineReducers({
  AccountReducer,
  commonReducer,
  SearchReducer,
  CustomReducer,
  ListTCReducer,
});
export default rootReducer;
