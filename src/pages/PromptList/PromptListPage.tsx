import Banner from '../../components/Banner/Banner';
import PromptCard from './_components/PromptCard';
import { usePromptList } from '../../hooks/prompts/usePromptList';
import Pagination from '../../components/Pagination/Pagination';
import { useMemo, useState } from 'react';
import useMyLikedPromptIds from '../../hooks/likes/useMyLikedPromptIds';

const PromptListPage = () => {
  const [page, setPage] = useState(1);

  const { prompts: publicPrompts, meta, loading, error } = usePromptList({ page, size: 21 });
  const { likedIds } = useMyLikedPromptIds();

  const mergedPrompts = useMemo(() => {
    if (!publicPrompts) return [];

    const likedIdSet = new Set(likedIds);

    return publicPrompts.map((prompt) => ({
      ...prompt,
      isLiked: likedIdSet.has(prompt.id),
      isBookmarked: false, // 임시
    }));
  }, [publicPrompts, likedIds]);

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
        {mergedPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} router={`/${prompt.id}`} />
        ))}
      </div>
      <Pagination currentPage={meta.page} totalSize={meta.totalPages} onPageChange={setPage} />
    </div>
  );
};

export default PromptListPage;
