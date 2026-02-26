import { API } from '@/config/api';
import { PROMPT_ACTION_API } from '@/constants';

import type { PromptBookmarkResponse } from './bookmark.types';

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
