import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { localStorageExtension } from "extensions/local-storage";
import { loadingStore } from "store/loading.store";

export const reqresAPI: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REQRES_API_URL,
});

reqresAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    loadingStore.wait();

    config.headers.Authorization = `Bearer ${localStorageExtension.getAccessToken()}`;

    return config;
  },
  (error: AxiosError): Promise<never> => {
    loadingStore.stop();

    return Promise.reject(error);
  },
);

reqresAPI.interceptors.response.use(
  (response: AxiosResponse<unknown>): AxiosResponse<unknown> => {
    loadingStore.stop();

    return response;
  },
  (error: AxiosError): Promise<never> => {
    loadingStore.stop();

    return Promise.reject(error);
  },
);
