export interface PromptBookmarkResponse {
  success: boolean;
  data: {
    bookmarked: boolean;
    bookmarkCount: number;
  };
}
