import CopyPromptButton from './CopyPromptButton';

interface PromptContentBoxProps {
  promptId: number;
  description: string;
}

const PromptContentBox = ({ promptId, description }: PromptContentBoxProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-gray-700">프롬프트</h2>
        <CopyPromptButton promptId={promptId} content={description} />
      </header>
      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">{description}</pre>
    </div>
  );
};

export default PromptContentBox;
