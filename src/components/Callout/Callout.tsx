import type { CalloutProps } from './Callout.types';

// TODO: feedback variant 추가 필요
const Callout = ({ children }: CalloutProps) => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 pl-5">
      <p className="text-gray-700 leading-relaxed whitespace-pre">{children}</p>
    </div>
  );
};

export default Callout;
