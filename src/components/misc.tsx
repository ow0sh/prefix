import { FC, PropsWithChildren } from 'react';

// разделительная линия
export const Separator = () => {
  return (
    <div className="w-full relative z-40 h-[1px] bg-gradient-to-r from-transparent via-[#40c1fb] to-transparent bg-[#252c41]"></div>
  );
};

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="lg:px-[160px] md:px-[80px] px-[10px]">{children}</div>;
};
