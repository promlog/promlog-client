export interface CommonResponse<T> {
  success: boolean;
  data: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface UserCommonInfo {
  id: number;
  nickname: string;
  role: 'USER';
  status: 'ACTIVE' | 'DELETED';
}

export interface AccountInfo extends UserCommonInfo {
  lastLoginAt: string;
  createdAt: string;
}

export interface LoginResult {
  accessToken: string;
  refreshToken: string;
  account: UserCommonInfo;
}

export interface TokenResult {
  accessToken: string;
}
