import { API } from '../../config/api';
import type {
  CopyPromptResponse,
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

export const incrementCopyCount = async (promptId: number): Promise<CopyPromptResponse> => {
  const { data } = await API.post(`/api/prompts/${promptId}/copy`);

  return data;
};
