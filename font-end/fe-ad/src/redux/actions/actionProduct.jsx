import { toast } from "react-toastify";
import ProductService from "../../services/ProductService";
import {
  COMMON_LOADING_SET,
  PRODUCTS_DEL,
  PRODUCTS_SET,
  PRODUCT_ADDEND,
  PRODUCT_SET,
} from "./actiontypes";

const service = new ProductService();

export const insterProduct = (product, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.insertProduct(product);

    if (res && res.status === 201) {
      dispatch({
        type: PRODUCT_SET,
        payload: res.data,
      });

      dispatch({
        type: PRODUCT_ADDEND,
        payload: res.data,
      });

      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
      toast.success("Save Done");
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });

    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: true,
  });
  clearProduct();
  navigate("/product/list");
};

export const updateProduct = (id, product, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const res = await service.updateProduct(id, product);

    if (res && res.status === 201) {
      dispatch({
        type: PRODUCT_SET,
        payload: res.data,
      });

      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
      toast.success("Update Done");
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
    console.log(error.message);
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: true,
  });
  clearProduct();
  navigate("/product/list");
};

export const getListProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.getProduct();
    if (res && res.status === 200) {
      dispatch({
        type: PRODUCTS_SET,
        payload: res.data,
      });
      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
    console.log(error.message);
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: true,
  });
};

export const productEditData = (product, navigate) => (dispatch) => {
  dispatch({
    type: PRODUCT_SET,
    payload: product,
  });
  navigate("/product/edit/" + product.id);
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.deleteProduct(id);

    console.log(res);

    if (res && res.status === 200) {
      console.log("status:", res.status);
      console.log("Run Ac");
      dispatch({
        type: PRODUCTS_DEL,
        payload: id,
      });

      dispatch({
        type: COMMON_LOADING_SET,
        payload: false,
      });
      toast.success(res.data);
    }
  } catch (error) {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: false,
    });
    toast.error(
      error.response.data ? error.response.data.message : error.message
    );
  }
};

export const clearProduct = () => (dispatch) => {
  dispatch({
    type: PRODUCT_SET,
    payload: {},
  });
};
