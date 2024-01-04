import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 1000,
});

Api.interceptors.response.use(function (response) {
  return response.data;
});
