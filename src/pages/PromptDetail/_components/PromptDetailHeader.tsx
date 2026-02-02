import Badge from '../../../components/Badge/Badge';
import { TextLabel } from '../../../components/Label/Label';
import type { PromptDTO } from '../../../mappers/promptMapper';

interface PromptDetailHeaderProps {
  prompt: PromptDTO;
}

const PromptDetailHeader = ({ prompt }: PromptDetailHeaderProps) => {
  const { content, stats, tags, author } = prompt;

  return (
    <div className="flex flex-col gap-5 w-4xl">
      <div className="flex items-start justify-between gap-4 flex-col">
        <h1 className="text-gray-900 leading-tight flex-1 text-2xl">{content.title}</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="category">{tags.category}</Badge>
          <Badge variant="platform">{tags.platform}</Badge>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <TextLabel icon="view">조회 {stats.viewCount}</TextLabel>
        <TextLabel icon="copy">복사 {stats.copyCount}</TextLabel>
        <TextLabel icon="calendar">{content.createdAt}</TextLabel>
        <TextLabel>작성자: {author.nickname}</TextLabel>
      </div>
    </div>
  );
};

export default PromptDetailHeader;
