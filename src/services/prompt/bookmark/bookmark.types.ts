export interface PromptBookmarkResponse {
  success: boolean;
  data: {
    bookmarked: boolean;
    bookmarkCount: number;
  };
}

export interface GetMyBookmarkListParams {
  page?: number;
  size?: number;
}
