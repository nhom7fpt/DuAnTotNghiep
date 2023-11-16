import axios from "axios";
import { API_ACC, API_ACCREG, API_UPDATE } from "./constant";

export default class AccountService {
  RegAccount = async (account) => {
    return axios.post(API_ACCREG, account);
  };
  Login = async (account) => {
    return axios.post(API_ACC, account);
  };
  updateAccount = async (id, account) => {
    return await axios.patch( API_UPDATE + "/" + id, account);
};
fillAccount = async (id, account) => {
  return await axios.get( API_UPDATE + "/" + id, account);
};
}
