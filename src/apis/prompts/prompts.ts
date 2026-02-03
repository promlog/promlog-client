import { API } from '../../config/api';
import type {
  CopyPromptResponse,
  CreatePromptRequest,
  CreatePromptResponse,
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

export const createPrompt = async (prompt: CreatePromptRequest): Promise<CreatePromptResponse> => {
  const { data } = await API.post('/api/prompts', prompt);

  return data;
};

export const incrementCopyCount = async (promptId: number): Promise<CopyPromptResponse> => {
  const { data } = await API.post(`/api/prompts/${promptId}/copy`);

  return data;
};

export const getMyLikedPromptIds = async (): Promise<number[]> => {
  const { data } = await API.get('/api/prompts/me/likes');

  return data.data.items.map((item: PromptListItemResponse) => item.id);
};
