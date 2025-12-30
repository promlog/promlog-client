import { useParams } from 'react-router-dom';
import { prompts } from '../../mocks/prompts';
import BackToListButton from './_components/BackToListButton';
import CopyPromptButton from './_components/CopyPromptButton';
import PromptContentBox from './_components/PromptContentBox';
import PromptDetailHeader from './_components/PromptDetailHeader';

const PromptDetailPage = () => {
  const promptIdParam = useParams().promptId;

  if (!promptIdParam) return null;

  const promptId = Number(promptIdParam);

  const { title, description, category, tags, views, createdAt, author } = prompts[promptId - 1];

  return (
    <div className="flex flex-col gap-5">
      <BackToListButton />
      <div className="space-y-6 max-w-4xl">
        <PromptDetailHeader
          title={title}
          category={category}
          tags={tags}
          views={views}
          date={createdAt}
          writer={author.name}
        />
        <PromptContentBox description={description} />
        <CopyPromptButton />
      </div>
    </div>
  );
};

export default PromptDetailPage;
