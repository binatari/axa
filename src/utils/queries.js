import axios from "axios";





export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'https://strapi-production-a27b.up.railway.app/api'
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});





