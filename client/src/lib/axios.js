import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://yardstick-task-nine.vercel.app/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
