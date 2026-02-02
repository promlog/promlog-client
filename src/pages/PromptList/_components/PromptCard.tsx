import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import type { PromptDTO } from '../../../mappers/promptMapper';

type PromptCardProps = {
  prompt: PromptDTO;
  router: string;
};

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
    bookmarkAction: () => alert('북마크 클릭'),
  };

  return (
    <Card
      id={prompt.id}
      writer={prompt.author.nickname}
      badges={badges}
      content={prompt.content}
      stats={prompt.stats}
      actions={actions}
      onClick={() => navigate(router)}
    />
  );
};

export default PromptCard;
