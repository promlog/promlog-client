import Button from '../Button/Button';
import { Dialog } from './_components/Dialog';
import { Logo } from '../Logo/Logo';
import { useState } from 'react';
// import { Icon } from '../Icon/Icon';
import { useAuth } from '../../contexts/useAuth';

// const AddPromptButton = () => (
//   <Button icon="addLine" iconSize="md">
//     프롬프트 등록
//   </Button>
// );

const LoginButton = () => <Button variant="solid">로그인</Button>;

const UserMenuButton = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
      <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-sm" />
      <span>{name}</span>
    </button>
  );
};

const UserDropdown = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
      <button
        type="button"
        onClick={onLogout}
        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2">
        {/* <Icon name="logout" size="sm" aria-hidden /> */}
        <span>로그아웃</span>
      </button>
      <Dialog.Withdraw
        trigger={
          <button
            type="button"
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2">
            {/* <Icon name="userX" size="sm" aria-hidden /> */}
            <span>회원 탈퇴</span>
          </button>
        }
      />
    </div>
  );
};

const NavigationBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <header className="bg-white w-full border-b border-gray-200 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <Logo.Basic />
          <div className="flex items-center gap-3 relative">
            {/* {isLoggedIn && user ? (
              <Button icon="addLine" iconSize="md">
                프롬프트 등록
              </Button>
            ) : (
              <Dialog.Login trigger={AddPromptButton()} />
            )} */}

            {isLoggedIn && user ? (
              <div className="relative">
                <UserMenuButton name={user.name} onClick={() => setMenuOpen((prev) => !prev)} />
                {menuOpen && <UserDropdown onLogout={handleLogout} />}
              </div>
            ) : (
              <Dialog.Login trigger={LoginButton()} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
