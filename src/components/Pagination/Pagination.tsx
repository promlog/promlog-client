import { DOTS } from '../../config/constants';
import { usePagination } from '../../hooks/prompts/usePagination';
import SvgChevornleft from '../Icon/generated/ChevornLeft';
import SvgChevronRight from '../Icon/generated/ChevronRight';
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
  const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : 0;

  if (currentPage === 0) return null;

  const onPrevious = () => onPageChange(currentPage - 1);
  const onNext = () => onPageChange(currentPage + 1);

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label="이전 페이지"
        className={`${ButtonStyles.base} ${
          currentPage === 1 ? ButtonStyles.disabled : ButtonStyles.inactive
        }`}>
        <SvgChevornleft />
      </button>
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
          <button
            key={pageNumber}
            className={`${ButtonStyles.base} ${
              pageNumber === currentPage ? ButtonStyles.active : ButtonStyles.inactive
            }`}
            onClick={() => onPageChange(Number(pageNumber))}>
            {pageNumber}
          </button>
        );
      })}
      <button
        onClick={onNext}
        disabled={currentPage === lastPage}
        aria-label="다음 페이지"
        className={`${ButtonStyles.base} ${
          currentPage === lastPage ? ButtonStyles.disabled : ButtonStyles.inactive
        }`}>
        <SvgChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
