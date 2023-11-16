import { combineReducers } from "redux";
import CategoryReducer from "../redux/reducers/CategoryReducer";
import commonReducer from "./reducers/commonReducer";
import ManufacturerReducer from "./reducers/ManufacturerReducer";
import ProductReducer from "./reducers/ProductReducer";
import AccountReducer from "./reducers/AccountReducer";
import OrderReducer from "./reducers/OrderReducer";
const rootReducer = combineReducers({
  CategoryReducer,
  commonReducer,
  ManufacturerReducer,
  ProductReducer,
  AccountReducer,
  OrderReducer,
});

export default rootReducer;
