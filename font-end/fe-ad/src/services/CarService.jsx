import axios from "axios";
import { API_CAR } from "./constant";

export default class CarService {
  insertCar = async (Car) => {
    return await axios.post(API_CAR, Car);
  };

  getCar = async () => {
    return await axios.get(API_CAR);
  };

  deleteCar = async (id) => {
    return await axios.delete(API_CAR + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_CAR + "/" + id);
  };

  updateCar = async (id, Car) => {
    return await axios.patch(API_CAR + "/ud/" + id, Car);
  };
}
