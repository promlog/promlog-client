import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const BackToListButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button icon="backLine" variant="empty" onClick={() => navigate(-1)}>
        목록으로
      </Button>
    </div>
  );
};

export default BackToListButton;
