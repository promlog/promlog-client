import CopyPromptButton from './CopyPromptButton';

interface PromptContentBoxProps {
  promptId: number;
  prompt: string;
}

const PromptContentBox = ({ promptId, prompt }: PromptContentBoxProps) => {
  return (
    <div className="flex flex-col gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">프롬프트</h2>
        <CopyPromptButton promptId={promptId} content={prompt} />
      </header>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <pre className="whitespace-pre-wrap text-[0.9375rem] leading-[1.8] text-gray-800">
          {prompt}
        </pre>
      </div>
    </div>
  );
};

export default PromptContentBox;
