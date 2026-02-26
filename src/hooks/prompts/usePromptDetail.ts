import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { mapPromptDetailDTO } from '@/mappers/promptMapper';
import { promptApi } from '@/services';

export const usePromptDetail = (promptId: number | null) => {
  const query = useQuery({
    queryKey: promptId
      ? QUERY_KEY.PROMPT.DETAIL(promptId)
      : QUERY_KEY.PROMPT.DETAILS,
    queryFn: () => promptApi.getDetail(promptId!),
    select: (response) => mapPromptDetailDTO(response),
    enabled: !!promptId,
  });

  return {
    detailedPrompt: query.data ?? null,
    loading: query.isLoading,
    error: query.isError,
  };
};
