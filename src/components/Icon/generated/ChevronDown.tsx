import type { SVGProps } from 'react';

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    aria-hidden="true"
    className="chevron-down_svg__lucide chevron-down_svg__lucide-chevron-down chevron-down_svg__w-4 chevron-down_svg__h-4 chevron-down_svg__transition-transform"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default SvgChevronDown;
