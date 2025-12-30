import { API } from '../../config/api';
import type {
  GetPromptListParams,
  PromptDetailResponse,
  PromptListResponse,
} from './prompts.types';

export const getPromptList = async ({
  sort = 'latest',
  page = 1,
  size = 20,
}: GetPromptListParams = {}): Promise<PromptListResponse> => {
  const { data } = await API.get('/api/prompts', {
    params: { sort, page, size },
  });

  return data;
};

export const getPromptDetail = async (promptId: number): Promise<PromptDetailResponse> => {
  const { data } = await API.get(`/api/prompts/${promptId}`);

  return data;
};
