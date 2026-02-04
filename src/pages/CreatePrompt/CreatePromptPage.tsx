import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CreatePromptForm from './_components/CreatePromptForm';

const CreatePromptPage = () => {
  const navigate = useNavigate();
  const { promptId } = useParams();

  const isEditMode = !!promptId;

  return (
    <div className="w-3xl">
      <section className="w-full max-w-2xl bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <header className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-gray-900 text-lg">
            {isEditMode ? '프롬프트 수정' : '프롬프트 등록'}
          </h2>
          <Button icon="close" variant="ghost" aria-label="닫기" onClick={() => navigate(-1)} />
        </header>
        <div className="p-6">
          <CreatePromptForm promptId={promptId} isEditMode={isEditMode} />
        </div>
      </section>
    </div>
  );
};

export default CreatePromptPage;
