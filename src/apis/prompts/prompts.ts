import { API } from '@/config/api';
import { PROMPT_ACTION_API, PROMPT_API } from '@/constants';

import type {
  CopyPromptResponse,
  CreatePromptRequest,
  CreatePromptResponse,
  GetPromptListParams,
  PromptDetailResponse,
  PromptLikeResponse,
  PromptListItemResponse,
  PromptListResponse,
} from '../../services/prompt/prompts.types';

export const getPromptList = async ({
  sort = 'latest',
  page = 1,
  size = 20,
  categoryIds,
  platformIds,
}: GetPromptListParams = {}): Promise<PromptListResponse> => {
  const params: GetPromptListParams = { sort, page, size };

  if (categoryIds) params.categoryIds = categoryIds;
  if (platformIds) params.platformIds = platformIds;

  const { data } = await API.get(PROMPT_API.BASE, { params });

  return data;
};

export const getPromptDetail = async (
  promptId: number,
): Promise<PromptDetailResponse> => {
  const { data } = await API.get(PROMPT_API.DETAIL(promptId));

  return data;
};

export const createPrompt = async (
  prompt: CreatePromptRequest,
): Promise<CreatePromptResponse> => {
  const { data } = await API.post(PROMPT_API.BASE, prompt);

  return data;
};

export const deletePrompt = async (
  promptId: number,
): Promise<CreatePromptResponse> => {
  const { data } = await API.delete(PROMPT_API.DETAIL(promptId));

  return data;
};

export const updatePrompt = async (
  promptId: number,
  prompt: CreatePromptRequest,
): Promise<CreatePromptResponse> => {
  const { data } = await API.patch(PROMPT_API.DETAIL(promptId), prompt);

  return data;
};

export const getMyPrompt = async (): Promise<number[]> => {
  const { data } = await API.get(PROMPT_API.ME);

  return data.data.items.map((item: PromptListItemResponse) => item.id);
};

export const incrementCopyCount = async (
  promptId: number,
): Promise<CopyPromptResponse> => {
  const { data } = await API.post(PROMPT_ACTION_API.COPY(promptId));

  return data;
};

export const getMyLikedPromptIds = async (): Promise<number[]> => {
  const { data } = await API.get('/api/prompts/me/likes');

  return data.data.items.map((item: PromptListItemResponse) => item.id);
};

export const likePrompt = async (
  promptId: number,
): Promise<PromptLikeResponse> => {
  const { data } = await API.post(PROMPT_ACTION_API.LIKE(promptId));

  return data;
};

export const unlikePrompt = async (
  promptId: number,
): Promise<PromptLikeResponse> => {
  const { data } = await API.delete(PROMPT_ACTION_API.LIKE(promptId));

  return data;
};
