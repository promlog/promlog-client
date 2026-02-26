import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { mapPromptListItemDTO } from '@/mappers';
import { type GetPromptListParams, getMyBookmarks } from '@/services';

export const useMyBookmarkList = (
  params: Pick<GetPromptListParams, 'page' | 'size'> & { enabled?: boolean },
) => {
  const { enabled = true, ...queryParams } = params;

  const query = useQuery({
    queryKey: QUERY_KEY.PROMPT.BOOKMARK(queryParams),
    queryFn: () => getMyBookmarks(queryParams),
    select: (response) => ({
      prompts: response.data.items.map(mapPromptListItemDTO),
      meta: response.data.meta,
    }),
    placeholderData: keepPreviousData,
    enabled,
  });

  return {
    prompts: query.data?.prompts || [],
    meta: query.data?.meta || {
      page: 1,
      size: 0,
      totalElements: 0,
      totalPages: 0,
      hasNext: false,
    },
    loading: query.isLoading,
    error: query.error,
  };
};
