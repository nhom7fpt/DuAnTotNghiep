import {
  PRODUCTS_DEL,
  PRODUCTS_SET,
  PRODUCT_ADDEND,
  PRODUCT_SET,
} from "../actions/actiontypes";

const initialState = {
  product: {},
  products: [],
};

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_SET:
      return { ...state, product: payload };
    case PRODUCT_ADDEND:
      return { ...state, products: [payload, ...state.products] };
    case PRODUCTS_SET:
      return { ...state, products: payload };
    case PRODUCTS_DEL:
      const newProduct = state.products.filter((item) => item.id !== payload);
      return {
        ...state,
        products: newProduct,
      };
    default:
      return state;
  }
};
export default ProductReducer;
