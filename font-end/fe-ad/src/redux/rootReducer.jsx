import { combineReducers } from "redux";
import LoaiXeReducer from "./reducers/LoaiXeReducer";
import commonReducer from "./reducers/commonReducer";
import ManufacturerReducer from "./reducers/ManufacturerReducer";
import CarReducer from "./reducers/CarReducer";
import AccountReducer from "./reducers/AccountReducer";
import OrderReducer from "./reducers/OrderReducer";
import NhanVienReducer from "./reducers/NhanVienReduver";
import TuyenXeReducer from "./reducers/TuyenXeReducer";
import ChuyenReducer from "./reducers/ChuyenReducer";
import NoiTraReducer from "./reducers/NoiTraReducer";
const rootReducer = combineReducers({
  LoaiXeReducer,
  commonReducer,
  ManufacturerReducer,
  CarReducer,
  AccountReducer,
  OrderReducer,
  NhanVienReducer,
  TuyenXeReducer,
  ChuyenReducer,
  NoiTraReducer,
});

export default rootReducer;
