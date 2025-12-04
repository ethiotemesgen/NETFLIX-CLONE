import axios from "axios";

// Axios instance for TMDB requests
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // TMDB base URL
});

export default axiosInstance;
