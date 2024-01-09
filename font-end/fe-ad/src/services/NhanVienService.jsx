import axios from "axios";
import { API_EMP } from "./constant";

export default class NhanVienService {
  insterNhanVien = async (nhanVien) => {
    return await axios.post(API_EMP, nhanVien);
  };

  getNhanVien = async (id) => {
    return await axios.get(API_EMP + "/nhaxe/" + id);
  };

  deleteNhanVien = async (id) => {
    return await axios.delete(API_EMP + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_EMP + "/" + id);
  };

  updateNhanVien = async (id, nhanVien) => {
    return await axios.patch(API_EMP + "/" + id, nhanVien);
  };
}
