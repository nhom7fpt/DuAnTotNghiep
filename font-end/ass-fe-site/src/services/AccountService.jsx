import axios from "axios";
import { API_ACC, API_ACCREG, API_UPDATE } from "./constant";

export default class AccountService {
  RegAccount = async (account) => {
    return axios.post(API_ACCREG, account);
  };
  Login = async (account) => {
    return axios.post(API_ACC, account);
  };

}
