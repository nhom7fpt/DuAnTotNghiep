import axios from "axios";
import { API_PRODUCT } from "./constant";

export default class ProductService {
  insertProduct = async (Product) => {
    return await axios.post(API_PRODUCT, Product);
  };

  getProduct = async () => {
    return await axios.get(API_PRODUCT);
  };

  deleteProduct = async (id) => {
    return await axios.delete(API_PRODUCT + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_PRODUCT + "/" + id);
  };

  updateProduct = async (id, Product) => {
    return await axios.patch(API_PRODUCT + "/ud/" + id, Product);
  };

  static getProductImageUrl = (fileName) => {
    return API_PRODUCT + "/images/" + fileName;
  };

  static getProductImageUploadUrl = (fileName) => {
    return API_PRODUCT + "/images/one";
  };

  static deleteProductImage = async (fileName) => {
    await axios.delete(API_PRODUCT + "/images/" + fileName);
  };
}
