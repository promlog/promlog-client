import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { postKakaoCode } from '../../apis/auth/kakao';
import { authStorage } from '../../lib/authStorage';

const KakaoCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const calledRef = useRef(false);

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    if (error) {
      console.error('Kakao OAuth:', error, errorDescription);
      navigate('/', { replace: true });

      return;
    }

    if (!code) {
      console.error('Kakao OAuth: code를 찾을 수 없습니다.');
      navigate('/', { replace: true });

      return;
    }

    if (calledRef.current) return;
    calledRef.current = true;

    (async () => {
      try {
        const { data } = await postKakaoCode(code);
        authStorage.setTokens(data.accessToken, data.refreshToken);

        // TODO: 전역 상태에 user 정보 필요

        navigate('/', { replace: true });
      } catch (error) {
        console.error('code가 유효하지 않습니다.', error);
        navigate('/', { replace: true });
      }
    })();
  }, [searchParams, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-xl border border-gray-200 px-6 py-4 text-gray-700">
        로그인 중입니다...
      </div>
    </div>
  );
};

export default KakaoCallbackPage;
