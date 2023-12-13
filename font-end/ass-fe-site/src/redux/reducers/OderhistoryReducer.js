import {ORDER_SET} from "../actions/actionType";

const initialState = {
  listData: [],
};
const Oderhistory = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDER_SET:
      return { ...state, listData: payload };
    default:
      return state;
  }
};
export default Oderhistory;
