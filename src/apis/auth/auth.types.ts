interface UserCommonInfo {
  id: number;
  nickname: string;
  role: 'USER';
  status: 'ACTIVE' | 'DELETED';
}

interface AccountInfo extends UserCommonInfo {
  lastLoginAt: string;
  createdAt: string;
}

export interface KakaoLoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    account: UserCommonInfo;
  };
}

export interface UserInfoResponse {
  success: boolean;
  data: AccountInfo;
}

export interface AccountDeleteResponse {
  deletedAt: string;
  rejoinAllowedAt: string;
}
