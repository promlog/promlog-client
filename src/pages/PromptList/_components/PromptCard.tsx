import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import type { PromptDTO } from '../../../mappers/promptMapper';
import { useAuth } from '../../../contexts/useAuth';
import { useLikePrompt } from '../../../hooks/likes/useLkiePrompt';
import { Dialog } from '../../../components/NavigationBar/_components/Dialog';

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
        <Dialog.Login trigger={confirm('로그인이 필요한 서비스입니다. 로그인하시겠습니까?')} />;
        return;
      }

      toggleLike(prompt.id);
    },
    bookmarkAction: () => alert('북마크 기능 준비 중'),
  };

  const active = {
    isLiked: prompt.isLiked,
    isBookmarked: prompt.isBookmarked,
  };

  return (
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
  );
};

export default PromptCard;
