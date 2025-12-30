import Banner from '../../components/Banner/Banner';
import PromptCard from './_components/PromptCard';
import { usePromptList } from '../../hooks/prompts/usePromptList';

const PromptListPage = () => {
  const { prompts, loading, error } = usePromptList();

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <span className="text-gray-500">프롬프트를 불러오는 중입니다...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-16">
        <span className="text-red-500">프롬프트를 불러오지 못했습니다.</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 flex flex-col gap-5">
      <Banner title="전체 프롬프트" subtitle="다양한 AI 프롬프트를 공유하고 발견하세요" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} router={`/prompts/${prompt.id}`} />
        ))}
      </div>
    </div>
  );
};

export default PromptListPage;
