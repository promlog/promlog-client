import Button from '../../../components/Button/Button';
import useCopyPrompt from '../../../hooks/prompts/useCopyPrompt';

interface CopyPromptButtonProps {
  promptId: number;
  content: string;
}

const CopyPromptButton = ({ promptId, content }: CopyPromptButtonProps) => {
  const { copy, isLoading } = useCopyPrompt({
    onSuccess: () => {
      alert('프롬프트가 복사되었습니다.');
    },
    onError: () => {
      alert('복사에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  return (
    <Button
      variant="tertiary"
      icon="copy"
      size="sm"
      onClick={() => copy(promptId, content)}
      disabled={isLoading}>
      {isLoading ? '복사 중...' : '복사'}
    </Button>
  );
};

export default CopyPromptButton;
