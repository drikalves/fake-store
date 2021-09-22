import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
};
