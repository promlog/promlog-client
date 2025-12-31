import { API } from '../../config/api';
import type { AccountDeleteResponse, UserInfoResponse } from './auth.types';

export const fetchAccount = async (): Promise<UserInfoResponse | null> => {
  try {
    const { data } = await API.get<UserInfoResponse>('/api/accounts/me');

    return data;
  } catch (error: any) {
    if (error.response?.status === 401) return null;

    throw error;
  }
};

export const deleteAccount = async () => {
  try {
    const { data } = await API.delete<AccountDeleteResponse>('/api/accounts/me');

    return data;
  } catch (error: any) {
    if (error.response?.status === 401) return null;

    throw error;
  }
};
