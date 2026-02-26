import Button from '@/components/Button/Button';
import { useCopyPrompt } from '@/hooks';
import copyToClipboard from '@/utils/clipboard';

interface CopyPromptButtonProps {
  promptId: number;
  content: string;
}

const CopyPromptButton = ({ promptId, content }: CopyPromptButtonProps) => {
  const { mutate: incrementCopyCount, isPending } = useCopyPrompt();

  const handleCopyClick = async () => {
    try {
      const isCopied = await copyToClipboard(content);

      if (isCopied) {
        incrementCopyCount(promptId);
        alert('클립보드에 복사되었습니다.');
      } else {
        throw new Error('클립보드 쓰기 실패');
      }
    } catch (error) {
      console.error('복사 중 에러 발생:', error);
      alert('복사에 실패했습니다. 권한을 확인해 주세요.');
    }
  };

  return (
    <Button
      variant="tertiary"
      icon="copy"
      size="sm"
      onClick={() => handleCopyClick()}
      disabled={isPending}
    >
      {isPending ? '복사 중...' : '복사'}
    </Button>
  );
};

export default CopyPromptButton;
