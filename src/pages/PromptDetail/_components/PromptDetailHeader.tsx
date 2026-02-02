import Badge from '../../../components/Badge/Badge';
import { TextLabel } from '../../../components/Label/Label';

interface PromptDetailHeaderProps {
  title: string;
  category: string[];
  tags: string[];
  views: number;
  date: string;
  writer: string;
  copies: number;
}

const PromptDetailHeader = ({
  title,
  category,
  tags,
  views,
  date,
  writer,
  copies,
}: PromptDetailHeaderProps) => {
  return (
    <div className="flex flex-col gap-5 w-4xl">
      <div className="flex items-start justify-between gap-4 flex-col">
        <h1 className="text-gray-900 leading-tight flex-1 text-2xl">{title}</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="category">{category}</Badge>
          <Badge variant="platform">{tags}</Badge>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <TextLabel icon="view">조회 {views}</TextLabel>
        <TextLabel icon="copy">복사 {copies}</TextLabel>
        <TextLabel icon="calendar">{date}</TextLabel>
        <TextLabel>작성자: {writer}</TextLabel>
      </div>
    </div>
  );
};

export default PromptDetailHeader;
