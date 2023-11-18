import axios from "axios";
import { API_CAR } from "./constant";

export default class ProductService {
  insertProduct = async (Product) => {
    return await axios.post(API_CAR, Product);
  };

  getProduct = async () => {
    return await axios.get(API_CAR);
  };

  deleteProduct = async (id) => {
    return await axios.delete(API_CAR + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_CAR + "/" + id);
  };

  updateProduct = async (id, Product) => {
    return await axios.patch(API_CAR + "/ud/" + id, Product);
  };

  static getProductImageUrl = (fileName) => {
    return API_CAR + "/images/" + fileName;
  };

  static getProductImageUploadUrl = (fileName) => {
    return API_CAR + "/images/one";
  };

  static deleteProductImage = async (fileName) => {
    await axios.delete(API_CAR + "/images/" + fileName);
  };
}
