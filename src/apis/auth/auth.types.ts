export interface KakaoLoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    account: UserCommonInfo;
  };
}
