import { API } from '@/config/instance';
import { PROMPT_ACTION_API, PROMPT_API } from '@/constants';

import type { PromptListResponse } from '../base/prompts.types';
import type {
  GetMyBookmarkListParams,
  PromptBookmarkResponse,
} from './bookmark.types';

export const bookmarkPrompt = async (
  promptId: number,
): Promise<PromptBookmarkResponse> => {
  const { data } = await API.post(PROMPT_ACTION_API.BOOKMARK(promptId));

  return data;
};

export const deleteBookmarkPrompt = async (
  promptId: number,
): Promise<PromptBookmarkResponse> => {
  const { data } = await API.delete(PROMPT_ACTION_API.BOOKMARK(promptId));

  return data;
};

export const getMyBookmarks = async (
  params: GetMyBookmarkListParams = {},
): Promise<PromptListResponse> => {
  const { data } = await API.get(PROMPT_API.BOOKMARKS, { params });

  return data;
};
