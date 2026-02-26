import { useQueries } from '@tanstack/react-query';

import { QUERY_KEY } from '@/constants';
import { mapToSelectOptions } from '@/mappers';
import { getCategories, getPlatforms } from '@/services';

export const useMetaOptions = () => {
  const metaOptions = useQueries({
    queries: [
      {
        queryKey: QUERY_KEY.META.categories,
        queryFn: getCategories,
        staleTime: Infinity,
        gcTime: Infinity,
        select: mapToSelectOptions,
      },
      {
        queryKey: QUERY_KEY.META.platforms,
        queryFn: getPlatforms,
        staleTime: Infinity,
        gcTime: Infinity,
        select: mapToSelectOptions,
      },
    ],
  });

  const [categoriesQuery, platformsQuery] = metaOptions;

  return {
    categoryOptions: categoriesQuery.data || [],
    platformOptions: platformsQuery.data || [],
    isLoading: categoriesQuery.isLoading || platformsQuery.isLoading,
    isError: categoriesQuery.isError || platformsQuery.isError,
  };
};
