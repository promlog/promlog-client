import { createContext, useContext, useEffect, useState } from 'react';
import { authStorage } from '../lib/authStorage';
import { fetchAccount } from '../apis/auth/account';

export type AuthUser = {
  id: number;
  name: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isLoggedIn: boolean;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = authStorage.getAccessToken();

    if (!accessToken) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const response = await fetchAccount();

        if (response) setUser({ id: response.data.id, name: response.data.nickname });
        else authStorage.clearTokens();
      } catch (error) {
        console.error('API 호출 실패', error);
        authStorage.clearTokens();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const logout = () => {
    authStorage.clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        setUser,
        logout,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth는 AuthProvider 내부에서 사용해야 합니다.');

  return context;
};
