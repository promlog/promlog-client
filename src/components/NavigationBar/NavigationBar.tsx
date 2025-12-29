import Button from '../Button/Button';
import { Dialog } from './_components/Dialog';
import { Logo } from '../Logo/Logo';

const AddPromptButton = () => (
  <Button icon="addLine" iconSize="md">
    프롬프트 등록
  </Button>
);

const LoginButton = () => <Button variant="solid">로그인</Button>;

// TODO: 로그인 시 LoginButton 회원 정보 표시 버튼 (클릭 시 메뉴 표시) 교체 필요 → 회원 탈퇴 클릭 시 회원 탈퇴 다이얼로그 표시
const NavigationBar = () => {
  return (
    <header className="bg-white w-full border-b border-gray-200 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <Logo.Basic />
          <div className="flex items-center gap-3">
            <Dialog.Login trigger={AddPromptButton()} />
            <Dialog.Login trigger={LoginButton()} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
