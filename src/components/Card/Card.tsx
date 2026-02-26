import type { MouseEvent } from 'react';

import { Badge, Button, Divider, TextLabel } from '@/components';

import type { CardProps } from './Card.types';

const stopPropagation = (e: MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};

const CardHeader = ({ badges }: Pick<CardProps, 'badges'>) => (
  <header className="flex items-center gap-2 flex-wrap">
    {badges.map((badge) => (
      <Badge key={badge.id} size="sm" variant={badge.variant}>
        {badge.name}
      </Badge>
    ))}
  </header>
);

const CardMain = ({
  writer,
  content,
}: Pick<CardProps, 'writer' | 'content'>) => {
  const { title, createdAt, description } = content;

  return (
    <main className="flex flex-col gap-3 h-42">
      <div className="flex flex-col gap-1">
        <h3 className="text-[1.0625rem] font-semibold text-gray-900 line-clamp-1 leading-snug transition-colors group-hover:text-brand-purple">
          {title}
        </h3>
        <div className="flex items-center gap-1.5">
          <TextLabel size="xs">{writer}</TextLabel>
          <TextLabel size="xs">·</TextLabel>
          <TextLabel size="xs">{createdAt}</TextLabel>
        </div>
      </div>
      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {description}
      </p>
    </main>
  );
};

const CardFooter = ({
  stats,
  actions,
  active,
}: Pick<CardProps, 'stats' | 'actions' | 'active'>) => {
  const { viewCount, copyCount, likeCount } = stats;
  const { likeAction, bookmarkAction } = actions;
  const { isLiked, isBookmarked } = active;

  return (
    <footer className="flex flex-col justify-center gap-2">
      <Divider />
      <div className="flex justify-between items-center pt-1">
        <div className="flex gap-3">
          <TextLabel icon="view" size="xs">
            {viewCount}
          </TextLabel>
          <TextLabel icon="copy" size="xs">
            {copyCount}
          </TextLabel>
        </div>
        <div className="flex gap-1.5" onClick={stopPropagation}>
          <Button
            icon="heart"
            variant="tertiary"
            size="xs"
            isActive={isLiked}
            onClick={likeAction}
          >
            {likeCount}
          </Button>
          <Button
            icon="bookmark"
            variant="tertiary"
            size="xs"
            className="p-1.5"
            isActive={isBookmarked}
            onClick={bookmarkAction}
          />
        </div>
      </div>
    </footer>
  );
};

export const Card = ({
  id,
  badges,
  writer,
  content,
  stats,
  actions,
  active,
  ...restProps
}: CardProps) => {
  return (
    <article
      key={id}
      className="flex flex-col h-58 gap-3 px-5 pt-5 pb-4 group bg-white rounded-2xl border border-gray-200 overflow-hidden cursor-pointer transition-all shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(109,91,208,0.12),0_4px_8px_-2px_rgba(109,91,208,0.08)] hover:translate-y-0.5 hover:border-brand-purple-border"
      {...restProps}
    >
      <CardHeader badges={badges} />
      <CardMain writer={writer} content={content} />
      <CardFooter active={active} stats={stats} actions={actions} />
    </article>
  );
};
