import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Layout = () => {
  return (
    <div className="flex w-screen flex-col mx-auto bg-gray-50 h-screen">
      <NavigationBar />
      <main className="justify-center flex mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
