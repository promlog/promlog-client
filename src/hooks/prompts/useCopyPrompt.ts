import { useMutation } from '@tanstack/react-query';
import { incrementCopyCount } from '../../apis/prompts/prompts';
import copyToClipboard from '../../utils/clipboard';

interface UseCopyPromptProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

// TODO: 낙관적 업데이트 추가 필요
const useCopyPrompt = ({ onSuccess, onError }: UseCopyPromptProps = {}) => {
  const mutation = useMutation({
    mutationFn: (promptId: number) => incrementCopyCount(promptId),
    onError: (error) => {
      console.warn('Copy count increment failed', error);
      onError?.(error);
    },
  });

  const handleCopy = async (promptId: number, content: string) => {
    const isCopied = await copyToClipboard(content);

    if (isCopied) {
      mutation.mutate(promptId);
      onSuccess?.();
    } else {
      onError?.(new Error('Clipboard write failed'));
    }
  };

  return {
    copy: handleCopy,
    isLoading: mutation.isPending,
  };
};

export default useCopyPrompt;
