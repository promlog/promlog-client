import type { SVGProps } from 'react';

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
    className="delete_svg__lucide delete_svg__lucide-trash2 delete_svg__lucide-trash-2 delete_svg__w-5 delete_svg__h-5"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10 11v6M14 11v6M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default SvgDelete;
