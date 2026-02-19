import { useQuery } from '@tanstack/react-query';

import { getCategories, getPlatforms } from '../../apis/common/meta';

interface SelectOption {
  slug: string;
  value: number;
  label: string;
}

export const useMetaOptions = () => {
  const categoryQuery = useQuery({
    queryKey: ['meta', 'categories'],
    queryFn: getCategories,
    staleTime: Infinity,
    gcTime: Infinity,
    select: (data): SelectOption[] =>
      data.map((item) => ({
        label: item.name,
        value: item.id,
        slug: item.slug,
      })),
  });

  const platformQuery = useQuery({
    queryKey: ['meta', 'platforms'],
    queryFn: getPlatforms,
    staleTime: Infinity,
    gcTime: Infinity,
    select: (data): SelectOption[] =>
      data.map((item) => ({
        label: item.name,
        value: item.id,
        slug: item.slug,
      })),
  });

  return {
    categoryOptions: categoryQuery.data || [],
    platformOptions: platformQuery.data || [],
    isLoading: categoryQuery.isLoading || platformQuery.isLoading,
  };
};
