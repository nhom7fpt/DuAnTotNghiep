import { toast } from "react-toastify";

import {
  COMMON_LOADING_SET,
  CARS_DEL,
  CARS_SET,
  CAR_ADDEND,
  CAR_SET,
} from "./actiontypes";
import CarService from "../../services/CarService";

const service = new CarService();

export const insterCar = (Car, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.insertProduct(Car);

    if (res && res.status === 201) {
      dispatch({
        type: CAR_SET,
        payload: res.data,
      });

      dispatch({
        type: CAR_ADDEND,
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
  clearCars();
  navigate("/product/list");
};

export const updateCar = (id, Car, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const res = await service.updateCar(id, Car);

    if (res && res.status === 201) {
      dispatch({
        type: CAR_SET,
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
  clearCars();
  navigate("/product/list");
};

export const getListCars = () => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.getCar();
    if (res && res.status === 200) {
      dispatch({
        type: CARS_SET,
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

export const CarEditData = (Car, navigate) => (dispatch) => {
  dispatch({
    type: CAR_SET,
    payload: Car,
  });
  navigate("/product/edit/" + Car.bienSoXe);
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.deleteCar(id);

    console.log(res);

    if (res && res.status === 200) {
      console.log("status:", res.status);
      console.log("Run Ac");
      dispatch({
        type: CARS_DEL,
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

export const clearCars = () => (dispatch) => {
  dispatch({
    type: CAR_SET,
    payload: {},
  });
};
