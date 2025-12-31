import { API } from '../../config/api';
import type { KakaoLoginResponse } from './auth.types';

export const postKakaoCode = async (code: string): Promise<KakaoLoginResponse> => {
  const { data } = await API.post<KakaoLoginResponse>('/api/auth/oauth/kakao/code', {
    code,
  });

  return data;
};

