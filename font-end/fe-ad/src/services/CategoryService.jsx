import axios from "axios";
import { API_CATEGORY } from "./constant";

export default class CategoryService {
  insertCategory = async (category) => {
    return await axios.post(API_CATEGORY, category);
  };

  getCategory = async (token) => {
    return await axios.get(API_CATEGORY, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  deleteCategory = async (id) => {
    return await axios.delete(API_CATEGORY + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_CATEGORY + "/" + id);
  };

  updateCategory = async (id, category) => {
    return await axios.patch(API_CATEGORY + "/ud/" + id, category);
  };
}
