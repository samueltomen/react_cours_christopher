import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

const myAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

myAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

myAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default myAxios;
