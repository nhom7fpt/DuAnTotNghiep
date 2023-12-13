import axios from "axios";
import { API_PAY} from "./constant";
export default class PayService {

    creatpay = async (data) => {
        return await axios.post(API_PAY + "create_pay", data);
      };
      loadData = async (id) => {
        return await axios.get(API_PAY +"/" +id);
      }
}