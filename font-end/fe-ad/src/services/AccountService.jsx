import axios from "axios";
import { API_ACC } from "./constant";

export default class AccountService {
  insertAccount = async (acc) => {
    return await axios.post(API_ACC, acc);
  };

  getAccount = async () => {
    return await axios.get(API_ACC);
  };

  deleteAccount = async (id) => {
    return await axios.delete(API_ACC + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_ACC + "/" + id);
  };

  updateAccount = async (id, acc) => {
    return await axios.patch(API_ACC + "/ud/" + id, acc);
  };
}
