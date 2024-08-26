import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:8080"
    : "https://portfoliobackend-rhw6.onrender.com",
  headers: { Accept: "text/html" },
  timeout: 50000,
});

export default AxiosInstance;
