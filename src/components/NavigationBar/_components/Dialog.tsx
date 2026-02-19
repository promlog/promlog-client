/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';

import { Dialog as DialogPrimitive } from 'radix-ui';

import { deleteAccount } from '../../../apis/auth/account';
import { API_BASE_URL } from '../../../config/api';
import { useAuth } from '../../../contexts/useAuth';
import Button from '../../Button/Button';
import { Dialog as DialogBasic } from '../../Dialog/Dialog';
import type { DialogProps } from '../../Dialog/Dialog.types';
import { IconLogo } from '../../Logo/Logo';
import WithdrawIcon from './WithdrawIcon';

type DialogCommonProps = Pick<DialogProps, 'trigger'>;
type DialogOpenProps = Pick<DialogProps, 'onOpenChange' | 'open'>;

type LoginDialogProps = DialogOpenProps & DialogCommonProps;

const LoginDialog = ({ trigger, open, onOpenChange }: LoginDialogProps) => {
  const handleKakaoLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/oauth/kakao/authorize`;
  };

  return (
    <DialogBasic
      open={open}
      onOpenChange={onOpenChange}
      icon={<IconLogo />}
      title="로그인"
      description="프롬프트를 등록하고 관리하려면 로그인이 필요합니다"
      caption="로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다"
      trigger={trigger}
      primaryAction={
        <button
          type="button"
          onClick={handleKakaoLogin}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#FEE500] text-[#000000] rounded-lg hover:bg-[#FDD835] transition-colors"
        >
          <span>카카오 로그인</span>
        </button>
      }
    />
  );
};

LoginDialog.displayName = 'Dialog.Login';

// TODO: callout/checkbox 컴포넌트 추가 필요, button 컴포넌트 확장 필요
const WithdrawDialog = ({ trigger }: DialogCommonProps) => {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const result = await deleteAccount();

      if (result) logout();
      else logout();
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogBasic
      icon={<WithdrawIcon />}
      title="회원 탈퇴"
      description="정말로 탈퇴하시겠습니까?"
      trigger={trigger}
      primaryAction={
        <DialogPrimitive.Close asChild>
          <Button variant="secondary" className="flex-1">
            취소
          </Button>
        </DialogPrimitive.Close>
      }
      secondaryAction={
        // <button
        //   type="button"
        //   onClick={handleWithdraw}
        //   className="flex-1 px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        //   <span className="text-white">탈퇴하기</span>
        // </button>
        <Button
          onClick={handleWithdraw}
          variant="destructive"
          className="flex-1"
          size="lg"
        >
          탈퇴하기
        </Button>
      }
    />
  );
};

WithdrawDialog.displayName = 'Dialog.Withdraw';

export const Dialog = {
  Login: LoginDialog,
  Withdraw: WithdrawDialog,
};
