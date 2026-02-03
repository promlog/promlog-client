import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/useAuth';

import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import { Dialog } from '../../../components/NavigationBar/_components/Dialog';

import useLikePrompt from '../../../hooks/likes/useLikePrompt';
import type { PromptDTO } from '../../../mappers/promptMapper';
import { useState } from 'react';

interface PromptActive {
  isLiked: boolean;
  isBookmarked: boolean;
}

type mergedPromptDTO = PromptDTO & PromptActive;

export interface PromptCardProps {
  prompt: mergedPromptDTO;
  router: string;
}

const PromptCard = ({ prompt, router }: PromptCardProps) => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  const { mutate: toggleLike } = useLikePrompt();

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
        isLiked: prompt.isLiked,
      });
    },
    bookmarkAction: () => alert('북마크 기능 준비 중'),
  };

  const active = {
    isLiked: prompt.isLiked,
    isBookmarked: prompt.isBookmarked,
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
      <Dialog.Login open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </>
  );
};

export default PromptCard;
