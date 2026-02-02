import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CreatePromptForm from './_components/CreatePromptForm';

const CreatePromptPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-3xl">
      <section className="w-full max-w-2xl bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <header
          className="flex items-center justify-between p-6 border-b border-gray-200"
          onClick={() => navigate(-1)}>
          <h2 className="text-gray-900 text-lg">프롬프트 등록</h2>
          <Button icon="close" variant="ghost" aria-label="닫기" />
        </header>
        <div className="p-6">
          <CreatePromptForm />
        </div>
      </section>
    </div>
  );
};

export default CreatePromptPage;
