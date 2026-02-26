import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { tokenManager } from '@/lib/tokenManager';
import { fetchAccount, logoutApi, refreshAccessToken } from '@/services';

export interface AuthUser {
  id: number;
  name: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (accessToken: string, user: AuthUser) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (window.location.pathname.includes('/oauth/callback')) {
        setIsLoading(false);
        return;
      }

      try {
        const { accessToken } = await refreshAccessToken();

        tokenManager.set(accessToken);

        const user = await fetchAccount();

        if (user) setUser({ id: user.id, name: user.nickname });
      } catch {
        tokenManager.clear();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback((accessToken: string, userInfo: AuthUser) => {
    tokenManager.set(accessToken);
    setUser(userInfo);
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutApi();
    } catch (error) {
      console.error('로그아웃 오류', error);
    } finally {
      tokenManager.clear();
      setUser(null);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-purple-600" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
};
