import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components';

import type { BasicLogoProps, IconLogoProps } from './Logo.types';

export const IconLogo = ({ size = 'xl' }: IconLogoProps) => {
  return <Icon name="logo" stroke="#fff" fill="none" size={size} />;
};

IconLogo.displayName = 'Logo.Icon';

export const BasicLogo = ({ ...restProps }: BasicLogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={() => navigate('/')}
      {...restProps}
    >
      <IconLogo />
      <span className="text-xl font-bold text-gray-900">프롬로그</span>
    </div>
  );
};

BasicLogo.displayName = 'Logo.Basic';
