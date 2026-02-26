import { useMemo } from 'react';

import { DOTS } from '../../config/constants';

export interface UsePaginationProps {
  totalSize: number;
  siblingCount?: number;
  currentPage: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = ({
  totalSize,
  siblingCount = 1,
  currentPage,
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    if (totalSize <= 0) return [];
    const totalPageNumbers = siblingCount + 5;

    if (totalSize <= totalPageNumbers) return range(1, totalSize);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalSize);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalSize - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalSize;

    // 1. 왼쪽만 ...이 있는 경우
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalSize - rightItemCount + 1, totalSize);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    // 2. 오른쪽만 ...이 있는 경우
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalSize];
    }

    // 3. 양쪽 다 ...이 있는 경우
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return range(firstPageIndex, lastPageIndex);
  }, [totalSize, siblingCount, currentPage]);

  return paginationRange;
};
