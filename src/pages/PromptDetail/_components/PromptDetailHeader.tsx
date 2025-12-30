import Badge from '../../../components/Badge/Badge';
import { Label } from '../../../components/Label/Label';

interface PromptDetailHeaderProps {
  title: string;
  category: string;
  tags: string;
  views: number;
  date: string;
  writer: string;
}

const PromptDetailHeader = ({
  title,
  category,
  tags,
  views,
  date,
  writer,
}: PromptDetailHeaderProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start justify-between gap-4 flex-col">
        <h1 className="text-gray-900 leading-tight flex-1 text-2xl">{title}</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="category">{category}</Badge>
          <Badge variant="platform">{tags}</Badge>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <Label.Text icon="view">조회 {views}</Label.Text>
        <Label.Text icon="calendar">{date}</Label.Text>
        <Label.Text>{writer}</Label.Text>
      </div>
    </div>
  );
};

export default PromptDetailHeader;
