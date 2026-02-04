import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import { useMetaOptions } from '../../hooks/common/useMetaOptions';
import { cn } from '../Button/Button.styles';

const Layout = () => {
  useMetaOptions();
  const location = useLocation();

  const isMainPage = location.pathname === '/';

  return (
    <div className="flex flex-1 flex-col mx-auto min-h-screen bg-primary">
      <NavigationBar />
      <main
        className={cn(
          'max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8',
          !isMainPage &&
            'lg:w-7xl min-h-[calc(100vh-4rem)] bg-white/95 backdrop-blur-sm border-x border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] flex justify-center sm:w-4xl'
        )}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
