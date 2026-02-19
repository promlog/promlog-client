import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { promptApi } from '@/services';

export const useDeletePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (promptId: number) => promptApi.delete(promptId),
    onSuccess: (_, promptId) => {
      queryClient.removeQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.ME });
    },
  });
};
