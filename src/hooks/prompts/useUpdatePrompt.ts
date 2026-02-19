import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { updatePrompt } from '../../apis/prompts/prompts';
import type { CreatePromptRequest } from '../../services/prompt/base/prompts.types';

export const useUpdatePrompt = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      promptId,
      prompt,
    }: {
      promptId: number;
      prompt: CreatePromptRequest;
    }) => updatePrompt(promptId, prompt),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['prompt', variables.promptId],
      });
      queryClient.invalidateQueries({ queryKey: ['prompts'] });
      queryClient.invalidateQueries({ queryKey: ['prompts', 'me'] });

      alert('프롬프트가 수정되었습니다.');
      navigate(`/prompts/${variables.promptId}`);
    },
    onError: (error) => {
      console.error(error);
      alert('수정 중 오류가 발생했습니다.');
    },
  });
};
