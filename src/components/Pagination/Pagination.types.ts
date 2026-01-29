import type { UsePaginationProps } from '../../hooks/prompts/usePagination';

interface PaginationBaseProps extends UsePaginationProps {
  onPageChange: (page: number) => void;
  className?: string;
}

export type PaginationProps = PaginationBaseProps;
