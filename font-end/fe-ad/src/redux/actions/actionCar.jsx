import { toast } from "react-toastify";
import CarService from "../../services/CarService";

import {
  COMMON_LOADING_SET,
  CARS_DEL,
  CARS_SET,
  CAR_ADDEND,
  CAR_SET,
} from "./actiontypes";


const service = new CarService();

export const insterCar = (Car, navigate) => async (dispatch) => {
  console.log(Car);
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.insterCar(Car)
    console.log(res);
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

    // toast.error(
    //   error.response.data ? error.response.data.message : error.message
    // );
  }
  dispatch({
    type: COMMON_LOADING_SET,
    payload: true,
  });
  clearCars();
  navigate("/product/list");
};

export const updateCar = (bienSoXe, Car, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });

    const res = await service.updateCar(bienSoXe, Car);

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
    console.log(res);
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

export const deleteCar = (bienSoXe) => async (dispatch) => {
  try {
    dispatch({
      type: COMMON_LOADING_SET,
      payload: true,
    });
    const res = await service.deleteCar(bienSoXe);

    console.log(res);

    if (res && res.status === 200) {
      console.log("status:", res.status);
      console.log("Run Ac");
      dispatch({
        type: CARS_DEL,
        payload: bienSoXe,
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
