import axios from "axios";

export const BASE_URL = '';

export const appAxiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
