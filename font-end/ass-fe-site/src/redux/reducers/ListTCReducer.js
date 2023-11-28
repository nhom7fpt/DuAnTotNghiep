import { FIELD_LISTTC } from "../actions/actionType";

const initialState = {
  fieldDataTC: [],
};

const ListTCReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIELD_LISTTC:
      return { ...state, fieldData: payload };

    default:
      return state;
  }
};
export default ListTCReducer;
