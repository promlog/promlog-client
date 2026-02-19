import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { mapPromptDetailDTO } from '@/mappers/promptMapper';
import { promptApi } from '@/services';

export const usePromptDetail = (promptId: number) => {
  const query = useQuery({
    queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
    queryFn: () => promptApi.getDetail(promptId),
    select: (response) => mapPromptDetailDTO(response),
  });

  return {
    detailedPrompt: query.data ?? null,
    loading: query.isLoading,
    error: query.isError,
  };
};
