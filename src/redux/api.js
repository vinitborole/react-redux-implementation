import axios from "axios";

const API = axios.create({ baseURL: "https://reqres.in/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});

export default API;
