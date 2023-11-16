import { FIELD_SET } from "../actions/actionType";

const initialState = {
  fieldData: [],
};

const SearchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIELD_SET:
      return { ...state, fieldData: payload };

    default:
      return state;
  }
};
export default SearchReducer;
