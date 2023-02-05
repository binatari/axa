import axios from "axios";





export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'https://exa-back-end.onrender.com/api'
});

api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});





