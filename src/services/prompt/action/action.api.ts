import { API } from '@/config/api';
import { PROMPT_ACTION_API } from '@/constants';

import type { CopyPromptResponse } from './action.types';

export const promptActionApi = {
  incrementCopyCount: async (promptId: number): Promise<CopyPromptResponse> => {
    const { data } = await API.post(PROMPT_ACTION_API.COPY(promptId));
    return data;
  },
};
