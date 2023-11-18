import axios from "axios";
import { API_LOAIXE } from "./constant";

export default class CategoryService {
  insertCategory = async (category) => {
    return await axios.post(API_LOAIXE, category);
  };

  getCategory = async (token) => {
    return await axios.get(API_LOAIXE, {});
  };

  deleteCategory = async (id) => {
    return await axios.delete(API_LOAIXE + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_LOAIXE + "/" + id);
  };

  updateCategory = async (id, category) => {
    return await axios.patch(API_LOAIXE + "/ud/" + id, category);
  };
}
