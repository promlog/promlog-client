let _accessToken: string | null = null;

export const tokenManager = {
  set: (token: string) => {
    _accessToken = token;
  },
  get: () => _accessToken,
  clear: () => {
    _accessToken = null;
  },
};
