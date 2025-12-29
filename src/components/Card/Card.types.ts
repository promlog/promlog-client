import type { ReactNode } from 'react';
import type { BadgeVariants } from '../Badge/Badge.types';

export interface CardBadges {
  name: string;
  variant: BadgeVariants;
}

interface CardBaseProps {
  badges: CardBadges[];
  header: string;
  children: ReactNode;
  view: string;
  date: string;
  writer: string;
}

export type CardProps = CardBaseProps;
