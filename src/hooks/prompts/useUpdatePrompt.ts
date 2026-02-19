import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { type CreatePromptRequest, promptApi } from '@/services';

interface UpdatePromptParams {
  promptId: number;
  prompt: CreatePromptRequest;
}

export const useUpdatePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ promptId, prompt }: UpdatePromptParams) =>
      promptApi.update(promptId, prompt),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(variables.promptId),
      });

      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.ME });
    },
  });
};
