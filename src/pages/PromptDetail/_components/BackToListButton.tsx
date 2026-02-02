import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const BackToListButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <Button
        icon="backLine"
        variant="ghost"
        onClick={() => navigate(-1)}
        className="p-0 text-gray-600 font-normal">
        목록으로
      </Button>
    </div>
  );
};

export default BackToListButton;
