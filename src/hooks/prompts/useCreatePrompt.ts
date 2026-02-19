import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { type CreatePromptRequest, promptApi } from '@/services';

export const useCreatePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (prompt: CreatePromptRequest) => promptApi.create(prompt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.ME });
    },
  });
};
