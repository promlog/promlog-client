import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import {
  type PromptDetailResponse,
  type PromptListResponse,
  bookmarkPrompt,
  deleteBookmarkPrompt,
} from '@/services';

export const useBookmarkPrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      promptId,
      isBookmarked,
    }: {
      promptId: number;
      isBookmarked: boolean;
    }) => {
      return isBookmarked
        ? deleteBookmarkPrompt(promptId)
        : bookmarkPrompt(promptId);
    },

    onMutate: async ({ promptId, isBookmarked }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.PROMPT.LISTS });
      await queryClient.cancelQueries({ queryKey: QUERY_KEY.PROMPT.BOOKMARKS });
      await queryClient.cancelQueries({
        queryKey: QUERY_KEY.PROMPT.DETAIL(promptId),
      });

      const previousLists = queryClient.getQueriesData({
        queryKey: QUERY_KEY.PROMPT.LISTS,
      });

      const previousBookmarks = queryClient.getQueriesData({
        queryKey: QUERY_KEY.PROMPT.BOOKMARKS,
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
                      isBookmarked: !isBookmarked,
                    },
                  };
                }

                return item;
              }),
            },
          };
        },
      );

      queryClient.setQueriesData(
        { queryKey: QUERY_KEY.PROMPT.BOOKMARKS },
        (oldData: PromptListResponse | undefined) => {
          if (!oldData?.data?.items) return oldData;

          return {
            ...oldData,
            data: {
              ...oldData.data,
              items: oldData.data.items.filter((item) => item.id !== promptId),
            },
          };
        },
      );

      queryClient.setQueryData(
        QUERY_KEY.PROMPT.DETAIL(promptId),
        (oldData: PromptDetailResponse | undefined) => {
          if (!oldData?.data) return oldData;

          return {
            ...oldData,
            data: {
              ...oldData.data,
              stats: {
                ...oldData.data.stats,
                isBookmarked: !isBookmarked,
              },
            },
          };
        },
      );

      return { previousLists, previousDetail, previousBookmarks };
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
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.PROMPT.BOOKMARKS });
    },
  });
};
