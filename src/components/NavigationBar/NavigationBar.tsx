import Button from '../Button/Button';
import { Logo } from '../Logo/Logo';

// TODO: 버튼 클릭 시 다이얼로그 표시
const NavigationBar = () => {
  return (
    <header className="bg-white w-full border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo.Basic />
          <div className="flex items-center gap-3">
            <Button icon="addLine" size="md">
              프롬프트 등록
            </Button>
            <Button variant="solid">로그인</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
