export interface PromptLikeResponse {
  success: boolean;
  data: {
    liked: boolean;
    likeCount: number;
  };
}
