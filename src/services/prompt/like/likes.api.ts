import { API } from '@/config/api';
import { PROMPT_ACTION_API } from '@/constants';

import type { PromptLikeResponse } from './likes.types';

export const promptLikeApi = {
  like: async (promptId: number): Promise<PromptLikeResponse> => {
    const { data } = await API.post(PROMPT_ACTION_API.LIKE(promptId));
    return data;
  },

  unlike: async (promptId: number): Promise<PromptLikeResponse> => {
    const { data } = await API.delete(PROMPT_ACTION_API.LIKE(promptId));
    return data;
  },
};
