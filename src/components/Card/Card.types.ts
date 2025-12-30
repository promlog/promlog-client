import type { HTMLAttributes, ReactNode } from 'react';
import type { BadgeVariants } from '../Badge/Badge.types';

export interface CardBadges {
  id: string;
  name: string;
  variant: BadgeVariants;
}

interface CardBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id: number;
  badges: CardBadges[];
  header: string;
  children: ReactNode;
  view: string;
  date: string;
  writer: string;
}

export type CardProps = CardBaseProps;
