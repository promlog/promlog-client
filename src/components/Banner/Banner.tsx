import type { BannerProps } from './Banner.types';

// TODO: Tab 컴포넌트 추가 필요
const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <section className="flex w-full items-center justify-between">
      <div className="flex pt-11 flex-col gap-3">
        <h1 className="text-gray-900 text-5xl">{title}</h1>
        <div className="pl-0.5">
          <p className="text-gray-500 text-2xl font-normal">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
