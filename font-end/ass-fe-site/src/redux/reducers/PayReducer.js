import { PAY_SET } from "../actions/actionType";

const initialState = {
  fieldData:{}

};

const PayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAY_SET:
      return { ...state, fieldData: payload };
   
    default:
      return state;
  }
};
export default PayReducer;
