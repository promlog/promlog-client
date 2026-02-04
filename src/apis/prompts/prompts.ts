import { API } from '../../config/api';
import type {
  CopyPromptResponse,
  CreatePromptRequest,
  CreatePromptResponse,
  GetPromptListParams,
  PromptDetailResponse,
  PromptLikeResponse,
  PromptListItemResponse,
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

export const deletePrompt = async (promptId: number) => {
  const { data } = await API.delete(`/api/prompts/${promptId}`);

  return data;
};

export const getMyPrompt = async (): Promise<number[]> => {
  const { data } = await API.get('/api/prompts/me');

  return data.data.items.map((item: PromptListItemResponse) => item.id);
};

export const incrementCopyCount = async (promptId: number): Promise<CopyPromptResponse> => {
  const { data } = await API.post(`/api/prompts/${promptId}/copy`);

  return data;
};

export const getMyLikedPromptIds = async (): Promise<number[]> => {
  const { data } = await API.get('/api/prompts/me/likes');

  return data.data.items.map((item: PromptListItemResponse) => item.id);
};

export const likePrompt = async (promptId: number): Promise<PromptLikeResponse> => {
  const { data } = await API.post(`/api/prompts/${promptId}/likes`);

  return data;
};

export const unlikePrompt = async (promptId: number): Promise<PromptLikeResponse> => {
  const { data } = await API.delete(`/api/prompts/${promptId}/likes`);

  return data;
};
