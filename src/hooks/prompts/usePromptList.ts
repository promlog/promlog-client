import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getMyPrompt, getPromptList } from '../../apis/prompts/prompts';
import { mapPromptListItemDTO } from '../../mappers/promptMapper';
import type { GetPromptListParams, PromptListMeta } from '../../apis/prompts/prompts.types';
import { useAuth } from '../../contexts/useAuth';

const defaultParams: GetPromptListParams = {
  page: 1,
  size: 21,
  sort: 'latest',
};

const defaultMeta: PromptListMeta = {
  page: defaultParams.page ?? 1,
  size: defaultParams.size ?? 0,
  totalElements: 0,
  totalPages: 0,
  hasNext: false,
};

export const usePromptList = (params?: GetPromptListParams) => {
  const queryParams = { ...defaultParams, ...params };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['prompts', 'list', queryParams],
    queryFn: () => getPromptList(queryParams),
    select: (response) => ({
      prompts: response.data.items.map(mapPromptListItemDTO),
      meta: response.data.meta,
    }),
    placeholderData: keepPreviousData,
  });

  return {
    prompts: data?.prompts || [],
    meta: data?.meta || defaultMeta,
    loading: isLoading,
    error,
    isError,
  };
};

export const useMyPromptIds = () => {
  const { isLoggedIn } = useAuth();

  const { data } = useQuery({
    queryKey: ['prompts', 'me'],
    queryFn: getMyPrompt,
    enabled: isLoggedIn,
    staleTime: 30_000,
  });

  return { promptIds: data ?? [] };
};
