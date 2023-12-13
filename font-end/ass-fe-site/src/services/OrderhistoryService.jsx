import axios from "axios";
import { API_LSDATVE } from "./constant";

export default class OrderhistoryService {
  ListByAccount = async (id,data) => {
    return axios.get(API_LSDATVE +"findbyaccount/"+ id,data);
  };

  ListByMave = async (id,data) => {
    return axios.get(API_LSDATVE +"findbymave/"+ id,data);
  };


}
