import axios from 'axios';
import { authStorage } from '../lib/authStorage';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = authStorage.getAccessToken();

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
