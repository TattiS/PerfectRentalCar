import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
