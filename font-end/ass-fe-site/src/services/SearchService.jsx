import axios from "axios";
import { API_SEARCH } from "./constant";
export default class SearchService {
  loadDataField = async () => {
    return await axios.get(API_SEARCH);
  };

  loadListChuyen = async (data) => {
    console.log(data);
    return await axios.post(API_SEARCH+"/one-way", data);
  };

  loadListChuyenReturn = async (tc) => {
    return await axios.post(API_SEARCH + "/return", tc);
  };
}