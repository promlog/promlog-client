import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '@/components';
import type { CardBadges } from '@/components/Card/Card.types';
import { Dialog } from '@/components/NavigationBar/_components/Dialog';
import { useAuth } from '@/contexts/useAuth';
import { useBookmarkPrompt, useLikePrompt } from '@/hooks';
import type { PromptDTO } from '@/mappers';

export interface PromptCardProps {
  prompt: PromptDTO;
  router: string;
}

const PromptCard = ({ prompt, router }: PromptCardProps) => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  const { mutate: toggleLike } = useLikePrompt();
  const { mutate: toogleBookmark } = useBookmarkPrompt();

  const { id, content, stats, tags, author } = prompt;

  const badges: CardBadges[] = [
    {
      id: `category-${id}`,
      name: tags.category,
      variant: 'category',
    },
    {
      id: `tag-${id}`,
      name: tags.platform,
      variant: 'platform',
    },
  ];

  const actions = {
    likeAction: () => {
      if (!isLoggedIn) {
        setIsLoginModalOpen(true);
        return;
      }

      toggleLike({
        promptId: id,
        isLiked: stats.isLiked,
      });
    },
    bookmarkAction: () => {
      if (!isLoggedIn) {
        setIsLoginModalOpen(true);
        return;
      }

      toogleBookmark({
        promptId: id,
        isBookmarked: stats.isBookmarked,
      });
    },
  };

  const active = {
    isLiked: stats.isLiked,
    isBookmarked: stats.isBookmarked,
  };

  return (
    <>
      <Card
        id={id}
        writer={author.nickname}
        badges={badges}
        content={content}
        stats={stats}
        actions={actions}
        active={active}
        onClick={() => navigate(router)}
      />
      <Dialog.Login
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
      />
    </>
  );
};

export default PromptCard;
