import type { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    aria-hidden="true"
    className="close_svg__lucide close_svg__lucide-x close_svg__w-5 close_svg__h-5"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default SvgClose;
