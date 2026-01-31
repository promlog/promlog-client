import type { SVGProps } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#fff"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    aria-hidden="true"
    className="chevron-right_svg__lucide chevron-right_svg__lucide-chevron-right chevron-right_svg__w-5 chevron-right_svg__h-5"
    viewBox="0 0 24 24"
    {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default SvgChevronRight;
