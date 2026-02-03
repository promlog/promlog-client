import { useMutation, useQueryClient } from '@tanstack/react-query';
import { togglePromptLike } from '../../apis/prompts/prompts';
import type { PromptListItemResponse, PromptListResponse } from '../../apis/prompts/prompts.types';

export const useLikePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (promptId: number) => togglePromptLike(promptId),
    onSuccess: (response, targetId) => {
      const { liked, likeCount } = response.data;

      queryClient.setQueriesData(
        { queryKey: ['prompts', 'list'] },
        (oldData: PromptListResponse) => {
          if (!oldData) return oldData;

          const items = oldData.data?.items || [];

          const newItems = items.map((item: PromptListItemResponse) => {
            if (item.id === targetId) {
              return {
                ...item,
                isLiked: liked,
                stats: {
                  ...item.stats,
                  likeCount: likeCount,
                },
              };
            }

            return item;
          });

          return {
            ...oldData,
            items: newItems,
          };
        }
      );

      queryClient.setQueryData(['prompts', 'me', 'likes'], (oldIds: number[] = []) => {
        if (liked) {
          return oldIds.includes(targetId) ? oldIds : [...oldIds, targetId];
        } else {
          return oldIds.filter((id) => id !== targetId);
        }
      });
    },
    onError: (error) => {
      console.error(error);
      alert('좋아요 처리에 실패했습니다.');
    },
  });
};
