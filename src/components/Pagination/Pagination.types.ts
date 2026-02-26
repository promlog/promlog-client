import type { UsePaginationProps } from '../../hooks/common/usePagination';

interface PaginationBaseProps extends UsePaginationProps {
  onPageChange: (page: number) => void;
  className?: string;
}

export type PaginationProps = PaginationBaseProps;
