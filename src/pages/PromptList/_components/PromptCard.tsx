import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/Card/Card';
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

  const badges: CardBadges[] = [
    {
      id: `category-${prompt.id}`,
      name: prompt.tags.category,
      variant: 'category',
    },
    {
      id: `tag-${prompt.id}`,
      name: prompt.tags.platform,
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
        promptId: prompt.id,
        isLiked: prompt.stats.isLiked,
      });
    },
    bookmarkAction: () => {
      if (!isLoggedIn) {
        setIsLoginModalOpen(true);
        return;
      }

      toogleBookmark({
        promptId: prompt.id,
        isBookmarked: prompt.stats.isBookmarked,
      });
    },
  };

  const active = {
    isLiked: prompt.stats.isLiked,
    isBookmarked: prompt.stats.isBookmarked,
  };

  return (
    <>
      <Card
        id={prompt.id}
        writer={prompt.author.nickname}
        badges={badges}
        content={prompt.content}
        stats={prompt.stats}
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
