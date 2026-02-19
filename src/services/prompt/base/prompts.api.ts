import { API } from '@/config/api';
import { PROMPT_API } from '@/constants';

import type {
  CreatePromptRequest,
  CreatePromptResponse,
  GetPromptListParams,
  PromptDetailResponse,
  PromptListResponse,
} from './prompts.types';

const promptApi = {
  getList: async (
    params: GetPromptListParams = {},
  ): Promise<PromptListResponse> => {
    const { data } = await API.get(PROMPT_API.BASE, { params });
    return data;
  },

  getDetail: async (promptId: number): Promise<PromptDetailResponse> => {
    const { data } = await API.get(PROMPT_API.DETAIL(promptId));
    return data;
  },

  create: async (
    prompt: CreatePromptRequest,
  ): Promise<CreatePromptResponse> => {
    const { data } = await API.post(PROMPT_API.BASE, prompt);
    return data;
  },

  update: async (
    promptId: number,
    prompt: CreatePromptRequest,
  ): Promise<CreatePromptResponse> => {
    const { data } = await API.patch(PROMPT_API.DETAIL(promptId), prompt);
    return data;
  },

  delete: async (promptId: number): Promise<CreatePromptResponse> => {
    const { data } = await API.delete(PROMPT_API.DETAIL(promptId));
    return data;
  },

  getMyPrompts: async () => {
    const { data } = await API.get(PROMPT_API.ME);
    return data;
  },
};

export default promptApi;
