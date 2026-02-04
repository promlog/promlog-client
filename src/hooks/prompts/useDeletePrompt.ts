import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePrompt } from '../../apis/prompts/prompts';

const useDeletePrompt = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (promptId: number) => deletePrompt(promptId),
    onSuccess: () => {
      alert('프롬프트가 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['prompts', 'me'] });
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
      alert('프롬프트 삭제에 실패했습니다. 다시 시도해 주세요.');
    },
  });
};

export default useDeletePrompt;
