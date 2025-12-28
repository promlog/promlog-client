import type { SVGProps } from 'react';

const SvgCircuit = (props: SVGProps<SVGSVGElement>) => (
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
    className="circuit_svg__lucide circuit_svg__lucide-cpu circuit_svg__w-4 circuit_svg__h-4"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2" />
    <rect width={16} height={16} x={4} y={4} rx={2} />
    <rect width={8} height={8} x={8} y={8} rx={1} />
  </svg>
);

export default SvgCircuit;
