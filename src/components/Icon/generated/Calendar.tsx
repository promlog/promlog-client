import type { SVGProps } from 'react';

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
    className="calendar_svg__lucide calendar_svg__lucide-calendar calendar_svg__w-4 calendar_svg__h-4"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M8 2v4M16 2v4" />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <path d="M3 10h18" />
  </svg>
);

export default SvgCalendar;
