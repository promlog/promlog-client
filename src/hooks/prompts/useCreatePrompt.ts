import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { CreatePromptRequest } from '../../apis/prompts/prompts.types';
import { createPrompt } from '../../apis/prompts/prompts';

const useCreatePrompt = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (prompt: CreatePromptRequest) => createPrompt(prompt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['prompts'] });
      alert('프롬프트가 성공적으로 등록되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
      alert('프롬프트를 등록하지 못했습니다. 다시 시도해 주세요.');
    },
  });
};

export default useCreatePrompt;
