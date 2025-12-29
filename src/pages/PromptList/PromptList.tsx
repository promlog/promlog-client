import Banner from '../../components/Banner/Banner';

import { prompts } from '../../mocks/prompts';
import PromptCard from './_components/PromptCard';

const PromptListPage = () => {
  return (
    <div className="space-y-6 flex flex-col gap-5">
      <Banner title="전체 프롬프트" subtitle="다양한 AI 프롬프트를 공유하고 발견하세요" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
};

export default PromptListPage;
