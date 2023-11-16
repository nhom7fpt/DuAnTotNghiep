import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Địa chỉ API của bạn

export const  registerUser = (userData) => {
  return axios.post(`${API_URL}/api/v1/acc`, userData);
};
