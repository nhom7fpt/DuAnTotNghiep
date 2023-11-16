import axios from "axios";
import { API_MANUFACTURER, API_TEST, API_TEST1 } from "./constant";

export default class ManufacturerService {
  insertManufacturer = async (Manufacturer) => {
    return await axios.post(API_TEST1, Manufacturer);
  };

  getManufacturer = async () => {
    return await axios.get(API_MANUFACTURER);
  };

  deleteManufacturer = async (id) => {
    return await axios.delete(API_MANUFACTURER + "/" + id);
  };

  getItem = async (id) => {
    return await axios.get(API_MANUFACTURER + "/" + id);
  };

  updateManufacturer = async (id, Manufacturer) => {
    let formData = new FormData();
    formData.append("name", Manufacturer.name);
    if (Manufacturer.logoFile[0].originFileObj) {
      formData.append("logoFile", Manufacturer.logoFile[0].originFileObj);
    }

    return await axios.patch(API_MANUFACTURER + "/ud/" + id, formData);
  };

  static getManufacturerLogo = (fileName) => {
    return API_MANUFACTURER + "/logo/" + fileName;
  };
}
