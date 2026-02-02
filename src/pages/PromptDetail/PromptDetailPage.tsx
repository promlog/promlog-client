import { useParams } from 'react-router-dom';
import BackToListButton from './_components/BackToListButton';
import PromptContentBox from './_components/PromptContentBox';
import PromptDetailHeader from './_components/PromptDetailHeader';
import { usePromptDetail } from '../../hooks/prompts/usePromptDetail';
import Callout from '../../components/Callout/Callout';
import Divider from '../../components/Divider/Divider';

const PromptDetailPage = () => {
  const { promptId: promptIdParam } = useParams<{ promptId: string }>();
  const promptId = promptIdParam ? Number(promptIdParam) : null;
  const { promptData, loading, error } = usePromptDetail(Number.isNaN(promptId) ? null : promptId);

  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <BackToListButton />
        <div className="max-w-4xl py-10 text-gray-500">프롬프트 불러오는 중...</div>
      </div>
    );
  }

  if (error || !promptData) {
    return (
      <div className="flex flex-col gap-5">
        <BackToListButton />
        <div className="max-w-4xl py-10 text-red-500">프롬프트를 불러오지 못했습니다.</div>
      </div>
    );
  }

  const { content } = promptData;

  return (
    <div className="flex flex-col gap-5">
      <BackToListButton />
      <div className="space-y-6 max-w-4xl">
        <PromptDetailHeader prompt={promptData} />
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-800 text-xl">💬 프롬프트 설명</h2>
          <p className="text-gray-700 leading-relaxed">{content.description}</p>
        </div>
        <PromptContentBox promptId={promptId!} description={content.description} />
        <Divider />
        {content.sourceUrl && (
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-800 text-xl">출처</h2>
            <p className="text-gray-700 leading-relaxed">{content.sourceUrl}</p>
          </div>
        )}
        {content.tip && (
          <div className="flex flex-col gap-4">
            <h2 className="text-gray-800 text-xl">💡 활용 팁</h2>
            <Callout variant="attentive">{content.tip}</Callout>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptDetailPage;
