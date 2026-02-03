import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likePrompt, unlikePrompt } from '../../apis/prompts/prompts';
import type { PromptListItemResponse, PromptListResponse } from '../../apis/prompts/prompts.types';

interface ToggleLikeParams {
  promptId: number;
  isLiked: boolean;
}

const useLikePrompt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ promptId, isLiked }: ToggleLikeParams) => {
      if (isLiked) return unlikePrompt(promptId);
      else return likePrompt(promptId);
    },

    onSuccess: (response, { promptId }) => {
      const { liked, likeCount } = response.data;

      queryClient.setQueriesData(
        { queryKey: ['prompts', 'list'] },
        (oldData: PromptListResponse) => {
          if (!oldData) return oldData;

          const items = oldData.data?.items || [];

          const newItems = items.map((item: PromptListItemResponse) => {
            if (item.id === promptId) {
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
          return oldIds.includes(promptId) ? oldIds : [...oldIds, promptId];
        } else {
          return oldIds.filter((id) => id !== promptId);
        }
      });
    },

    onError: (error) => {
      console.error(error);
      alert('요청을 처리하는 중 오류가 발생했습니다.');
    },
  });
};

export default useLikePrompt;
