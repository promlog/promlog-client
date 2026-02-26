import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth } from '@/contexts/useAuth';
import { kakaoLogin } from '@/services';

const KakaoCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const requestRef = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code || requestRef.current) return;
    requestRef.current = true;

    const handleLogin = async () => {
      try {
        const { accessToken, account } = await kakaoLogin(code);

        login(accessToken, {
          id: account.id,
          name: account.nickname,
        });

        navigate('/', { replace: true });
      } catch (error) {
        console.error('카카오 로그인 실패', error);

        alert('로그인 처리에 실패했습니다.');
        requestRef.current = false;

        navigate('/', { replace: true });
      }
    };

    handleLogin();
  }, [searchParams, navigate, login]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-gray-500">로그인 중...</div>
    </div>
  );
};

export default KakaoCallbackPage;
