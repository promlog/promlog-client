import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Banner, Button, Input, Pagination, TextLabel } from '@/components';
import { SORT_OPTIONS } from '@/config/constants';
import { useAuth } from '@/contexts/useAuth';
import { useMetaOptions, usePromptList } from '@/hooks';
import { useMyBookmarkList } from '@/hooks';
import type { PromptDTO } from '@/mappers';
import type { SortType } from '@/services';

import PromptCard from './_components/PromptCard';

type TabType = 'all' | 'bookmarks';

const PromptListPage = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const sortOrder = (searchParams.get('sort') as SortType) || 'latest';
  const currentTab = (searchParams.get('tab') as TabType) || 'all';

  const { categoryOptions, platformOptions } = useMetaOptions();

  const categoryParam = searchParams.get('category');
  const platformParam = searchParams.get('platform');

  const selectedCategory = categoryOptions.find(
    (opt) => opt.slug === categoryParam,
  );
  const selectedPlatform = platformOptions.find(
    (opt) => opt.slug === platformParam,
  );

  const categoryIds = selectedCategory
    ? [Number(selectedCategory.value)]
    : undefined;
  const platformIds = selectedPlatform
    ? [Number(selectedPlatform.value)]
    : undefined;

  const allPromptsQuery = usePromptList({
    page,
    size: 21,
    sort: sortOrder,
    categoryIds,
    platformIds,
  });

  const bookmarksPromptsQuery = useMyBookmarkList({
    page,
    size: 21,
    enabled: currentTab === 'bookmarks',
  });

  const { prompts, meta, loading, error } =
    currentTab === 'bookmarks' ? bookmarksPromptsQuery : allPromptsQuery;

  useEffect(() => {
    if (!isLoggedIn && currentTab === 'bookmarks') {
      const newParams = new URLSearchParams(searchParams);

      newParams.set('tab', 'all');
      newParams.set('page', '1');

      setSearchParams(newParams);
    }
  }, [isLoggedIn, currentTab, searchParams, setSearchParams]);

  const updateParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) newParams.set(key, value);
    else newParams.delete(key);

    return newParams;
  };

  const handleTabChange = (newTab: string) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set('tab', newTab);
    newParams.set('page', '1');

    setSearchParams(newParams);
  };

  const handleSortChange = (newSort: string) => {
    const newParams = updateParams('sort', newSort);

    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === '-1' || !value) newParams.delete(key);
    else newParams.set(key, value);

    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = updateParams('page', String(newPage));

    setSearchParams(newParams);
    window.scrollTo(0, 0);
  };

  const formattedCategoryOptions = [
    { value: '-1', label: '전체 카테고리' },
    ...categoryOptions.map((opt) => ({ label: opt.label, value: opt.slug })),
  ];

  const formattedPlatformOptions = [
    { value: '-1', label: '전체 플랫폼' },
    ...platformOptions.map((opt) => ({ label: opt.label, value: opt.slug })),
  ];

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
    <div className="space-y-6 flex flex-col flex-1 min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1">
          <Banner
            title="프롬프트 모음"
            subtitle="다양한 AI 프롬프트를 공유하고 발견하세요"
          />
        </div>

        {isLoggedIn ? (
          <>
            <div className="flex items-center gap-2">
              <Button
                variant={currentTab === 'all' ? 'primary' : 'tertiary'}
                onClick={() => handleTabChange('all')}
              >
                전체
              </Button>
              <Button
                icon="bookmark"
                variant={currentTab === 'bookmarks' ? 'primary' : 'tertiary'}
                onClick={() => handleTabChange('bookmarks')}
              >
                저장한 프롬프트
              </Button>
            </div>
          </>
        ) : undefined}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
        {currentTab === 'all' ? (
          <>
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
            <div className="flex gap-3 items-center justify-end">
              <Input.SelectField
                value={sortOrder}
                options={SORT_OPTIONS}
                onValueChange={handleSortChange}
              />
              <TextLabel className="flex whitespace-nowrap">
                <p className="pl-1 text-brand-purple">{meta.totalElements}</p>
                개의 프롬프트
              </TextLabel>
            </div>
          </>
        ) : undefined}
      </div>

      <div className="h-full flex">
        {prompts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-32rem)] text-gray-500 gap-2 flex-1">
            <p>
              {currentTab === 'bookmarks'
                ? '아직 저장한 프롬프트가 없습니다.'
                : '해당하는 프롬프트가 없습니다.'}
            </p>
          </div>
        ) : (
          <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 flex-1 content-start">
            {prompts.map((prompt: PromptDTO) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                router={`/prompts/${prompt.id}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-auto">
        <Pagination
          currentPage={meta.page}
          totalSize={meta.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PromptListPage;
