export type KakaoLoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    account: {
      id: number;
      nickname: string;
      role: 'USER';
      status: 'ACTIVE' | 'DELETED';
    };
  };
};
