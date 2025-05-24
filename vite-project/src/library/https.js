import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://h8-phase2-gc.vercel.app'
});

export default axiosInstance