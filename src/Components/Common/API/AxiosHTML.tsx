import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:8080"
    : "DEPLOYED LINK GOES HERE",
  headers: { Accept: "text/html" },
  timeout: 50000,
});

export default AxiosInstance;
