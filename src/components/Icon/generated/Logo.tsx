import type { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="logo_svg__w-8 logo_svg__h-8"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#6D5BD0"
      d="M28 9a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3l5 4 5-4h3a4 4 0 0 0 4-4z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 11-4 3 4 3M18 11l4 3-4 3"
    />
  </svg>
);

export default SvgLogo;
