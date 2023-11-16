import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";
import commonReducer from "./reducers/commonReducer";
import SearchReducer from "./reducers/SearchReducer";

const rootReducer = combineReducers({
  AccountReducer,
  commonReducer,
  SearchReducer,
  
});
export default rootReducer;
