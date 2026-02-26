export const PROMPT_API = {
  BASE: '/api/prompts',
  ME: '/api/prompts/me',
  BOOKMARKS: '/api/prompts/me/bookmarks',
  DETAIL: (id: number) => `/api/prompts/${id}`,
} as const;

export const PROMPT_ACTION_API = {
  LIKE: (id: number) => `/api/prompts/${id}/likes`,
  COPY: (id: number) => `/api/prompts/${id}/copy`,
  BOOKMARK: (id: number) => `/api/prompts/${id}/bookmarks`,
} as const;

export const META_API = {
  CATEGORIES: '/api/categories',
  PLATFORMS: '/api/platforms',
} as const;

export const AUTH_API = {
  KAKAO_OAUTH: '/api/auth/oauth/kakao/code',
  REFRESH_TOKEN: '/api/auth/refresh',
  USER: '/api/accounts/me',
  LOGOUT: '/api/auth/logout',
};
