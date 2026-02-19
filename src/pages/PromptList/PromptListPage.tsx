import { useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import type { SortType } from '../../apis/prompts/prompts.types';
import Banner from '../../components/Banner/Banner';
import { Input } from '../../components/Input/Input';
import { TextLabel } from '../../components/Label/Label';
import Pagination from '../../components/Pagination/Pagination';
import { SORT_OPTIONS } from '../../config/constants';
import { useMetaOptions } from '../../hooks/common/useMetaOptions';
import useMyLikedPromptIds from '../../hooks/likes/useMyLikedPromptIds';
import { usePromptList } from '../../hooks/prompts/usePromptList';
import PromptCard from './_components/PromptCard';

const PromptListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const sortOrder = (searchParams.get('sort') as SortType) || 'latest';

  const { likedIds } = useMyLikedPromptIds();
  const { categoryOptions, platformOptions } = useMetaOptions();

  const categoryParam = searchParams.get('category');
  const platformParam = searchParams.get('platform');

  const selectedCategory = categoryOptions.find(
    (option) => option.slug === categoryParam,
  );
  const selectedPlatform = platformOptions.find(
    (option) => option.slug === platformParam,
  );

  const categoryIdParam = selectedCategory
    ? Number(selectedCategory.value)
    : undefined;
  const platformIdParam = selectedPlatform
    ? Number(selectedPlatform.value)
    : undefined;

  const {
    prompts: publicPrompts,
    meta,
    loading,
    error,
  } = usePromptList({
    page,
    size: 21,
    sort: sortOrder,
    categoryIds: categoryIdParam ? [categoryIdParam] : undefined,
    platformIds: platformIdParam ? [platformIdParam] : undefined,
  });

  const formattedCategoryOptions = [
    { value: '-1', label: '전체 카테고리' },
    ...categoryOptions.map((opt) => ({ label: opt.label, value: opt.slug })),
  ];

  const formattedPlatformOptions = [
    { value: '-1', label: '전체 플랫폼' },
    ...platformOptions.map((opt) => ({ label: opt.label, value: opt.slug })),
  ];

  const mergedPrompts = useMemo(() => {
    if (!publicPrompts) return [];

    const likedIdSet = new Set(likedIds || []);

    return publicPrompts.map((prompt) => ({
      ...prompt,
      isLiked: likedIdSet.has(prompt.id),
      isBookmarked: false, // 임시
    }));
  }, [publicPrompts, likedIds]);

  const handleSortChange = (newSort: string) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('sort', newSort);
    newParams.set('page', '1');

    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('page', String(newPage));
    setSearchParams(newParams);

    window.scrollTo(0, 0);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === '-1' || !value) newParams.delete(key);
    else newParams.set(key, value);

    newParams.set('page', '1');
    setSearchParams(newParams);
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
      <Banner
        title="전체 프롬프트"
        subtitle="다양한 AI 프롬프트를 공유하고 발견하세요"
      />
      <div className="flex justify-between gap-3 items-center">
        <div className="flex items-center gap-3">
          <Input.SelectField
            placeholder="카테고리 선택"
            value={categoryParam || '-1'}
            options={formattedCategoryOptions}
            onValueChange={(value) => handleFilterChange('category', value)}
          />
          <Input.SelectField
            placeholder="플랫폼 선택"
            value={platformParam || '-1'}
            options={formattedPlatformOptions}
            onValueChange={(value) => handleFilterChange('platform', value)}
          />
        </div>
        <div className="flex gap-3 items-center">
          <Input.SelectField
            value={sortOrder}
            options={SORT_OPTIONS}
            onValueChange={handleSortChange}
          />
          <TextLabel className="flex">
            <p className="pl-1 text-brand-purple">{meta.totalElements}</p>개의
            프롬프트
          </TextLabel>
        </div>
      </div>

      {mergedPrompts.length === 0 ? (
        <div className="flex justify-center py-20 text-gray-500">
          해당하는 프롬프트가 없습니다.
        </div>
      ) : (
        <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mergedPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              router={`/prompts/${prompt.id}`}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={meta.page}
        totalSize={meta.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PromptListPage;
