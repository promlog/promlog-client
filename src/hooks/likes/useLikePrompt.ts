import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { promptLikeApi } from '@/services';
import type { PromptDetailResponse, PromptListResponse } from '@/services';

export const useLikePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      promptId,
      isLiked,
    }: {
      promptId: number;
      isLiked: boolean;
    }) => {
      return isLiked
        ? promptLikeApi.unlike(promptId)
        : promptLikeApi.like(promptId);
    },

    onMutate: async ({ promptId, isLiked }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      await queryClient.cancelQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      const previousLists = queryClient.getQueriesData({
        queryKey: QUERY_KEY.PROMPT.LISTS,
      });

      const previousDetail = queryClient.getQueryData(
        QUERY_KEY.PROMPT.DETAIL(promptId),
      );

      queryClient.setQueriesData(
        { queryKey: QUERY_KEY.PROMPT.LISTS },
        (oldData: PromptListResponse | undefined) => {
          if (!oldData?.data?.items) return oldData;

          return {
            ...oldData,
            data: {
              ...oldData.data,
              items: oldData.data.items.map((item) => {
                if (item.id === promptId) {
                  return {
                    ...item,
                    stats: {
                      ...item.stats,
                      isLiked: !isLiked,
                      likeCount: isLiked
                        ? Number(item.stats.likeCount) - 1
                        : Number(item.stats.likeCount) + 1,
                    },
                  };
                }

                return item;
              }),
            },
          };
        },
      );

      queryClient.setQueryData(
        QUERY_KEY.PROMPT.DETAIL(promptId),
        (oldData: PromptDetailResponse) => {
          if (!oldData?.data) return oldData;
          return {
            ...oldData,
            data: {
              ...oldData.data,
              stats: {
                ...oldData.data.stats,
                isLiked: !isLiked,
                likeCount: isLiked
                  ? Number(oldData.data.stats.likeCount) - 1
                  : Number(oldData.data.stats.likeCount) + 1,
              },
            },
          };
        },
      );

      return { previousLists, previousDetail };
    },

    onError: (_, { promptId }, context) => {
      if (context?.previousLists) {
        context.previousLists.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }

      if (context?.previousDetail) {
        queryClient.setQueryData(
          QUERY_KEY.PROMPT.DETAIL(promptId),
          context.previousDetail,
        );
      }
    },

    onSettled: (_, __, { promptId }) => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      queryClient.invalidateQueries({ queryKey: QUERY_KEY.ACTION.LIKES });
    },
  });
};
