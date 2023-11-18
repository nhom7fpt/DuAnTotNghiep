import { combineReducers } from "redux";
import LoaiXeReducer from "./reducers/LoaiXeReducer";
import commonReducer from "./reducers/commonReducer";
import ManufacturerReducer from "./reducers/ManufacturerReducer";
import CarReducer from "./reducers/CarReducer";
import AccountReducer from "./reducers/AccountReducer";
import OrderReducer from "./reducers/OrderReducer";
const rootReducer = combineReducers({
  LoaiXeReducer,
  commonReducer,
  ManufacturerReducer,
  CarReducer,
  AccountReducer,
  OrderReducer,
});

export default rootReducer;
