import axios from "axios";
import { API_ListTC } from "./constant";
import { API_ListTCOneWay } from "./constant";
import { API_ListTCReturn } from "./constant";
export default class SearchService {

  loadDataFieldTC = async () => {
    return await axios.get(API_ListTC);
  };

  loadDataFieldTCReturn = async (tc) => {
    return await axios.post(API_ListTCReturn + "/return", tc);
  };
}
