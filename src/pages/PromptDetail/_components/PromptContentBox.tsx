import Button from '../../../components/Button/Button';

interface PromptContentBoxProps {
  description: string;
}

const PromptContentBox = ({ description }: PromptContentBoxProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-gray-700">프롬프트</h2>
        <Button
          variant="empty"
          icon="copy"
          iconSize="sm"
          className="w-19 gap-1.5 px-3 text-sm hover:text-purple-600 hover:bg-white border border-gray-200 hover:border-purple-300">
          복사
        </Button>
      </header>
      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">{description}</pre>
    </div>
  );
};

export default PromptContentBox;
