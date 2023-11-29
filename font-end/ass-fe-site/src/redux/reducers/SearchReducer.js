import { FIELD_SET, LISTCHUYEN, LISTCHUYEN1, LISTCHUYEN2 } from "../actions/actionType";

const initialState = {
  fieldData: [],
  listChuyen: [],
  listChuyenReturn1 : [],
  listChuyenReturn2 : []
};

const SearchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIELD_SET:
      return { ...state, fieldData: payload };
    case LISTCHUYEN:
      return {...state, listChuyen: payload};
    case LISTCHUYEN1:
      return {...state, listChuyenReturn1: payload}
    case LISTCHUYEN2:
      return {...state, listChuyenReturn2: payload}
    default:
      return state;
  }
};
export default SearchReducer;
