import type { ReactNode } from 'react';
import type { BadgeVariants } from '../Badge/Badge.types';

export interface CardBadges {
  id: string;
  name: string;
  variant: BadgeVariants;
}

interface CardBaseProps {
  id: number;
  badges: CardBadges[];
  header: string;
  children: ReactNode;
  view: string;
  date: string;
  writer: string;
}

export type CardProps = CardBaseProps;
