interface PromptContentBoxProps {
  description: string;
}

const PromptContentBox = ({ description }: PromptContentBoxProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed font-sans">
          {description}
        </pre>
      </div>
    </div>
  );
};

export default PromptContentBox;
