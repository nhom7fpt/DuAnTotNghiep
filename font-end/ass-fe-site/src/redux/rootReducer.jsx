import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";
import commonReducer from "./reducers/commonReducer";
import SearchReducer from "./reducers/SearchReducer";
import CustomReducer from "./reducers/CustomReducer";
const rootReducer = combineReducers({
  AccountReducer,
  commonReducer,
  SearchReducer,
  CustomReducer,
});
export default rootReducer;
