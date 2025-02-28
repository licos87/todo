import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "../../shared/config/api";
import { toast } from "react-toastify";

export const createAPI = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    // Подумать над авторизацией
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      }
    }
  );
  return api;
};
