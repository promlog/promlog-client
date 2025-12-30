import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import type { PromptDTO } from '../../../mocks/prompts';

type PromptCardProps = {
  prompt: PromptDTO;
  router: string;
};

const PromptCard = ({ prompt, router }: PromptCardProps) => {
  const navigate = useNavigate();

  const badges: CardBadges[] = [
    {
      id: `category-${prompt.id}`,
      name: prompt.category,
      variant: 'category',
    },
    {
      id: `tag-${prompt.id}`,
      name: prompt.tags,
      variant: 'platform',
    },
  ];

  const viewText = new Intl.NumberFormat('ko-KR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(prompt.views);

  return (
    <Card
      id={prompt.id}
      header={prompt.title}
      badges={badges}
      view={viewText}
      date={prompt.createdAt}
      writer={prompt.author.name}
      onClick={() => navigate(router)}>
      {prompt.description}
    </Card>
  );
};

export default PromptCard;
