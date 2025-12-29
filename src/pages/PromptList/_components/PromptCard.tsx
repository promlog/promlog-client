import Card from '../../../components/Card/Card';
import type { CardBadges } from '../../../components/Card/Card.types';
import type { PromptDTO } from '../../../mocks/prompts';

type PromptCardProps = {
  prompt: PromptDTO;
};

const PromptCard = ({ prompt }: PromptCardProps) => {
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
      writer={prompt.author.name}>
      {prompt.description}
    </Card>
  );
};

export default PromptCard;
