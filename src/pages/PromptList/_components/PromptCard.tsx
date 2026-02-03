import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import type { PromptDTO } from '../../../mappers/promptMapper';

interface PromptIsLiked {
  isLiked: boolean;
  isBookmarked: boolean;
}

type mergedPromptDTO = PromptDTO & PromptIsLiked;

interface PromptCardProps {
  prompt: mergedPromptDTO;
  router: string;
}

const PromptCard = ({ prompt, router }: PromptCardProps) => {
  const navigate = useNavigate();

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
    likeAction: () => alert('좋아요 클릭'),
    bookmarkAction: () => alert('준비 중입니다'),
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
