import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import type { BasicLogoProps, IconLogoProps } from './Logo.types';
import { iconSizeMap } from './Icon.styles';

const IconLogo = ({ size = 'md', ...restProps }: IconLogoProps) => {
  return (
    <div
      className={`${iconSizeMap[size]} bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center`}
      {...restProps}>
      <Icon name="logo" stroke="#fff" fill="none" size={size} />
    </div>
  );
};

IconLogo.displayName = 'Logo.Icon';

const BasicLogo = ({ ...restProps }: BasicLogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
      onClick={() => navigate('/')}
      {...restProps}>
      <IconLogo />
      <span className="text-xl text-gray-900">프롬로그</span>
    </div>
  );
};

BasicLogo.displayName = 'Logo.Basic';

export const Logo = {
  Basic: BasicLogo,
  Icon: IconLogo,
};
