import type { SortType } from '../base/prompts.types';

export interface PromptBookmarkResponse {
  success: boolean;
  data: {
    bookmarked: boolean;
    bookmarkCount: number;
  };
}

export interface GetMyBookmarkListParams {
  sort?: SortType;
  page?: number;
}
