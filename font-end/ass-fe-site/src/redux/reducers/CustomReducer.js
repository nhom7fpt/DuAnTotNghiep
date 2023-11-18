import { CUSTOM_SET, ACCOUNT_STATE_CLEAR } from "../actions/actionType";
const initialState = {
  custom: {},
};

const CustomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CUSTOM_SET:
      return { ...state, custom: payload };
    case ACCOUNT_STATE_CLEAR:
      return { custom: {} };
    default:
      return state;
  }
};
export default CustomReducer;
