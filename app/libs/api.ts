import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api-blog.fahrikurniawan.com/api",
  timeout: 1000,
});

Api.interceptors.response.use(function (response) {
  return response.data;
});
