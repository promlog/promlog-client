import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Banner from '../../components/Banner/Banner';
import PromptCard from './_components/PromptCard';
import Pagination from '../../components/Pagination/Pagination';
import { Input } from '../../components/Input/Input';
import { TextLabel } from '../../components/Label/Label';

import { SORT_OPTIONS } from '../../config/constants';
import { usePromptList } from '../../hooks/prompts/usePromptList';
import useMyLikedPromptIds from '../../hooks/likes/useMyLikedPromptIds';

import type { SortType } from '../../apis/prompts/prompts.types';

const PromptListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const sortOrder = (searchParams.get('sort') as SortType) || 'latest';

  const {
    prompts: publicPrompts,
    meta,
    loading,
    error,
  } = usePromptList({ page, size: 21, sort: sortOrder });

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

  const handleSortChange = (newSort: string) => {
    setSearchParams({
      sort: newSort,
      page: '1',
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      sort: sortOrder,
      page: String(newPage),
    });

    window.scrollTo(0, 0);
  };

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
    <div className="space-y-6 flex flex-col flex-1">
      <Banner title="전체 프롬프트" subtitle="다양한 AI 프롬프트를 공유하고 발견하세요" />
      <div className="flex justify-between gap-3 items-center">
        <TextLabel className="flex pt-4">
          <p className="pl-1 text-brand-purple">{meta.totalElements}</p>개의 프롬프트
        </TextLabel>
        <Input.SelectField
          defaultValue={SORT_OPTIONS[0].value}
          value={sortOrder}
          options={SORT_OPTIONS}
          onValueChange={handleSortChange}
        />
      </div>
      <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mergedPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} router={`/${prompt.id}`} />
        ))}
      </div>
      <Pagination
        currentPage={meta.page}
        totalSize={meta.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PromptListPage;
