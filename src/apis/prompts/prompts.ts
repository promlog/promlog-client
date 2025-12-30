import { API } from '../../config/api';
import type {
  GetPromptListParams,
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
