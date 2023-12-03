import axios from "axios";
import { API_CUSTOM } from "./constant";

export default class AccountService {
   
    updateAccount = async (id, account) => {
      return await axios.patch( API_CUSTOM+ "/" + id, account);
  };
     fillAccount = async (id, account) => {
    return await axios.get( API_CUSTOM + "/" + id, account);
  };
  }
  