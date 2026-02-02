import type { ComponentPropsWithRef } from 'react';
import type { BadgeVariants } from '../Badge/Badge.types';

export interface CardBadges {
  id: string;
  name: string[];
  variant: BadgeVariants;
}

interface CardContent {
  title: string;
  createdAt: string;
  description: string;
}

interface CardStats {
  viewCount: string | number;
  copyCount: string | number;
  likeCount: string | number;
}

interface ButtonActions {
  likeAction: () => void;
  bookmarkAction: () => void;
}

export interface CardProps extends Omit<ComponentPropsWithRef<'article'>, 'id' | 'content'> {
  id: number;
  writer: string;
  content: CardContent;
  stats: CardStats;
  actions: ButtonActions;
  badges: CardBadges[];
}
