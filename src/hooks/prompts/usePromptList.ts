import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { useAuth } from '@/contexts/useAuth';
import { mapPromptListItemDTO } from '@/mappers/promptMapper';
import {
  type GetPromptListParams,
  type PromptListMeta,
  promptApi,
} from '@/services';

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

  const query = useQuery({
    queryKey: QUERY_KEY.PROMPT.LIST(queryParams),
    queryFn: () => promptApi.getList(queryParams),
    select: (response) => ({
      prompts: response.data.items.map(mapPromptListItemDTO),
      meta: response.data.meta,
    }),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    prompts: query.data?.prompts || [],
    meta: query.data?.meta || defaultMeta,
    loading: query.isLoading,
  };
};

export const useMyPromptIds = () => {
  const { isLoggedIn } = useAuth();

  const query = useQuery({
    queryKey: QUERY_KEY.PROMPT.ME,
    queryFn: promptApi.getMyPrompts,
    enabled: isLoggedIn,
    staleTime: 30_000,
  });

  return {
    ...query,
    myPromptIds: query.data ?? [],
  };
};
