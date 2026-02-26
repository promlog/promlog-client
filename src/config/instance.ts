import axios from 'axios';

import { tokenManager } from '@/lib/tokenManager';

interface FailedRequest {
  resolve: (token: string | null) => void;
  reject: (error: unknown) => void;
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API = axios.create({
  // 로컬일 때 baseURL 제거
  baseURL: API_BASE_URL,
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = tokenManager.get();

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) promise.reject(error);
    else promise.resolve(token);
  });

  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { refreshAccessToken } = await import('@/services/auth/auth.api');

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url?.includes('/auth/refresh')) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return API(originalRequest);
          })
          .catch((error) => Promise.reject(error));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { accessToken } = await refreshAccessToken();

        tokenManager.set(accessToken);
        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return API(originalRequest);
      } catch (error) {
        processQueue(error, null);
        tokenManager.clear();

        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
