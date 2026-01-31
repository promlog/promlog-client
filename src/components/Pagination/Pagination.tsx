import { DOTS } from '../../config/constants';
import { usePagination } from '../../hooks/prompts/usePagination';
import Button from '../Button/Button';
import { ButtonStyles } from './Pagination.styles';
import type { PaginationProps } from './Pagination.types';

const Pagination = ({
  totalSize,
  siblingCount = 1,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({ totalSize, siblingCount, currentPage });

  if (currentPage === 0 || totalSize <= 0 || !paginationRange?.length) return null;

  const lastPage = totalSize;

  const onPrevious = () => onPageChange(currentPage - 1);
  const onNext = () => onPageChange(currentPage + 1);

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <Button
        variant="ghost"
        icon="chevronLeft"
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
        className={`${ButtonStyles.base} ${
          currentPage === 1 ? ButtonStyles.disabled : ButtonStyles.inactive
        }`}
      />
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span
              key={`dots-${index}`}
              className="px-2 text-gray-400 flex items-center select-none">
              {DOTS}
            </span>
          );
        }

        return (
          <Button
            variant="ghost"
            key={pageNumber}
            className={`${ButtonStyles.base} ${
              pageNumber === currentPage ? ButtonStyles.active : ButtonStyles.inactive
            }`}
            onClick={() => onPageChange(Number(pageNumber))}>
            {pageNumber}
          </Button>
        );
      })}
      <Button
        icon="chevronRight"
        variant="ghost"
        onClick={onNext}
        disabled={currentPage === lastPage}
        aria-label="다음 페이지"
        className={`${ButtonStyles.base} ${
          currentPage === lastPage ? ButtonStyles.disabled : ButtonStyles.inactive
        }`}
      />
    </div>
  );
};

export default Pagination;
