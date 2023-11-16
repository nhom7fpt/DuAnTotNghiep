import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";
import commonReducer from "./reducers/commonReducer";

const rootReducer = combineReducers({
  AccountReducer,
  commonReducer,
});
export default rootReducer;
