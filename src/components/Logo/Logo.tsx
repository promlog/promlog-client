import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

const IconLogo = ({ ...restProps }) => {
  return (
    <div
      className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center"
      {...restProps}>
      <Icon name="logo" stroke="#fff" />
    </div>
  );
};

IconLogo.displayName = 'Logo.Icon';

const BasicLogo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
      onClick={() => navigate('/')}>
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
