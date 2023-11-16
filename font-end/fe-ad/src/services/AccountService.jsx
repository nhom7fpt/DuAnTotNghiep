import axios from "axios";
import { API_ACCOUNT } from "./constant";

export default class AccountService {
  insertAccount = async (acc) => {
    return await axios.post(API_ACCOUNT, acc);
  };

  getAccount = async () => {
    return await axios.get(API_ACCOUNT);
  };

  deleteAccount = async (id) => {
    return await axios.delete(API_ACCOUNT + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_ACCOUNT + "/" + id);
  };

  updateAccount = async (id, acc) => {
    return await axios.patch(API_ACCOUNT + "/ud/" + id, acc);
  };
}
