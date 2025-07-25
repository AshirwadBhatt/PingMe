import axios from "axios";

// Dynamically choose base URL from environment variable
const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
