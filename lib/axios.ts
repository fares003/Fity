import axios from "axios";

const api = axios.create({
  baseURL: "https://fitnessgym.runasp.net", // your API base URL
  withCredentials: false, // if you need cookies
});

export default api;
