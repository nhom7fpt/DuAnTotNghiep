import axios from "axios";
import { API_IMG } from "./constant";

export default class ImagesService {
  static getImageUrl = (fileName) => {
    return API_IMG + "/images/" + fileName;
  };

  static getImageUploadUrl = (fileName) => {
    return API_IMG + "/images/one";
  };

  static deleteImage = async (fileName) => {
    await axios.delete(API_IMG + "/images/" + fileName);
  };
}
