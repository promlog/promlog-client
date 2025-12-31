import { API_BASE_URL } from '../../../config/api';
import { Dialog as DialogBasic } from '../../Dialog/Dialog';
import type { DialogProps } from '../../Dialog/Dialog.types';
import { Logo } from '../../Logo/Logo';
import WithdrawIcon from './WithdrawIcon';

type DialogCommonProps = Pick<DialogProps, 'trigger'>;

const LoginDialog = ({ trigger }: DialogCommonProps) => {
  const handleKakaoLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/oauth/kakao/authorize`;
  };

  return (
    <DialogBasic
      icon={<Logo.Icon size="xl" />}
      title="로그인"
      description="프롬프트를 등록하고 관리하려면 로그인이 필요합니다"
      caption="로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다"
      trigger={trigger}
      primaryAction={
        <button
          type="button"
          onClick={handleKakaoLogin}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#FEE500] text-[#000000] rounded-lg hover:bg-[#FDD835] transition-colors">
          <span>카카오 로그인</span>
        </button>
      }
    />
  );
};

LoginDialog.displayName = 'Dialog.Login';

// TODO: callout/checkbox 컴포넌트 추가 필요, button 컴포넌트 확장 필요
const WithdrawDialog = ({ trigger }: DialogCommonProps) => {
  return (
    <DialogBasic
      icon={<WithdrawIcon />}
      title="회원 탈퇴"
      description="정말로 탈퇴하시겠습니까?"
      trigger={trigger}
      primaryAction={
        <button
          type="button"
          className="flex-1 px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <span className="text-gray-700">취소</span>
        </button>
      }
      secondaryAction={
        <button
          type="button"
          className="flex-1 px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <span className="text-white">탈퇴하기</span>
        </button>
      }
    />
  );
};

WithdrawDialog.displayName = 'Dialog.Withdraw';

export const Dialog = {
  Login: LoginDialog,
  Withdraw: WithdrawDialog,
};
