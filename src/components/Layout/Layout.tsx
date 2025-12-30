import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const Layout = () => {
  return (
    <div className="flex flex-col mx-auto">
      <NavigationBar />
      <main className="justify-center flex mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
