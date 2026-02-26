import { API } from '@/config/instance';
import { AUTH_API } from '@/constants';

import type { AccountInfo, LoginResult, TokenResult } from './auth.types';

export const kakaoLogin = async (code: string): Promise<LoginResult> => {
  const { data } = await API.post(AUTH_API.KAKAO_OAUTH, { code });
  return data.data;
};

export const refreshAccessToken = async (): Promise<TokenResult> => {
  const { data } = await API.post(AUTH_API.REFRESH_TOKEN);
  return data.data;
};

export const fetchAccount = async (): Promise<AccountInfo> => {
  const { data } = await API.get(AUTH_API.USER);
  return data.data;
};

export const logoutApi = async (): Promise<void> => {
  await API.post(AUTH_API.LOGOUT);
};

export const deleteAccount = async () => {
  const { data } = await API.delete(AUTH_API.USER);
  return data;
};
