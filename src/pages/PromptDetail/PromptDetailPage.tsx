import { useParams } from 'react-router-dom';
import BackToListButton from './_components/BackToListButton';
import PromptContentBox from './_components/PromptContentBox';
import PromptDetailHeader from './_components/PromptDetailHeader';
import { usePromptDetail } from '../../hooks/prompts/usePromptDetail';
import Divider from '../../components/Divider/Divider';
import { useMemo } from 'react';
import { useMyPromptIds } from '../../hooks/prompts/usePromptList';

const PromptDetailPage = () => {
  const { promptId: promptIdParam } = useParams<{ promptId: string }>();
  const promptId = promptIdParam ? Number(promptIdParam) : null;
  const { promptData, loading, error } = usePromptDetail(Number.isNaN(promptId) ? null : promptId);
  const { promptIds } = useMyPromptIds();

  const isMyPrompt = useMemo(() => {
    if (!promptId) return [];

    const promptIdSet = new Set(promptIds);

    return promptIdSet.has(promptId);
  }, [promptId, promptIds]);

  if (loading) {
    return (
      <div className="flex flex-col gap-8 pt-4 w-[80%]">
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

  console.log(isMyPrompt);

  return (
    <div className="flex flex-col gap-8 pt-4 w-[80%]">
      <BackToListButton />
      <div className="space-y-6 flex flex-col gap-2">
        <PromptDetailHeader prompt={promptData} />
        <Divider />
        <div className="flex flex-col gap-13">
          <div className="flex flex-col gap-3 pt-5">
            <h2 className="text-2xl font-semibold text-gray-900">프롬프트 설명</h2>
            <p className="leading-[1.8] text-gray-700">{content.description}</p>
          </div>
          <PromptContentBox promptId={promptId!} description={content.description} />
          {content.sourceUrl && (
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">출처</h2>
              <p className="leading-[1.8] text-gray-700">{content.sourceUrl}</p>
            </div>
          )}
          {content.tip && (
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">활용 팁</h2>
              <p className="leading-[1.8] text-gray-700">{content.tip}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptDetailPage;
