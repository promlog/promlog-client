import type { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
    className="check_svg__lucide check_svg__lucide-check check_svg__w-4 check_svg__h-4"
    style={{
      color: 'var(--brand-purple)',
    }}
    viewBox="0 0 24 24"
    {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default SvgCheck;
