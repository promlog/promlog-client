import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { type PromptDetailResponse, actionApi } from '@/services';

export const useCopyPrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (promptId: number) => actionApi.incrementCopyCount(promptId),
    onMutate: async (promptId) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      const previousPrompt = queryClient.getQueryData(
        QUERY_KEY.PROMPT.DETAIL(promptId),
      );

      if (previousPrompt) {
        queryClient.setQueryData(
          QUERY_KEY.PROMPT.DETAIL(promptId),
          (old: PromptDetailResponse) => ({
            ...old,
            data: {
              ...old.data,
              stats: {
                copyCount: old.data.stats.copyCount + 1,
              },
            },
          }),
        );
      }

      return { previousPrompt };
    },
    onError: (_, promptId, context) => {
      if (context?.previousPrompt) {
        queryClient.setQueryData(
          QUERY_KEY.PROMPT.DETAIL(promptId),
          context.previousPrompt,
        );
      }
    },
    onSettled: (_, __, promptId) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
    },
  });
};
