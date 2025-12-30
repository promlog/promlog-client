import type { SVGProps } from 'react';

const SvgBackLine = (props: SVGProps<SVGSVGElement>) => (
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
    viewBox="0 0 24 24"
    {...props}>
    <path d="m12 19-7-7 7-7M19 12H5" />
  </svg>
);

export default SvgBackLine;
