import Image from 'next/image';
import { Separator, Wrapper } from '../misc';

// часть сайта с призывом к регистрации
const Register = () => {
  return (
    <>
      <div className="w-full">
        <Wrapper>
          <div className="flex flex-col items-center">
            <h1 className="mt-[20px] md:mt-[88px] max-w-[680px] text-text text-center text-[24px] md:text-[48px] font-[445] md:leading-[65px]">
              Register your account now and start to trade
            </h1>
            <div
              className={
                'md:mb-[150px] mb-[30px] mt-[20px] md:mt-[54px] flex max-w-[420px] rounded-md border-t-[1px] ' +
                ' border-border-gray bg-gray relative top-[21%] z-50'
              }
            >
              <div className="h-full flex pl-[16px] py-[11px] pr-[10px]">
                <Image
                  className="bg-gray"
                  src={'/mail-02.svg'}
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <input
                className="text-text outline-none bg-gray w-full rounded-md"
                placeholder="Example@gmail.com"
              />
              <button
                className={
                  'bg-light-blue hover:bg-darker-blue  ' +
                  ' transition duration-300 px-[24px] py-[10px] whitespace-nowrap rounded-md'
                }
              >
                Sign in
              </button>
            </div>
          </div>
          <ShadowSVG />
          <div
            className={
              'bg-[#39B8FF] blur-[300px] w-[150px] md:w-[300px] ' +
              ' h-[90px] absolute z-10 md:top-[220%] lg:top-[340%] xl:top-[280%] 2xl:top-[300%] xl:left-[30%]'
            }
          />
        </Wrapper>
      </div>
      <Separator />
    </>
  );
};

const ShadowSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1018}
      height={1200}
      viewBox="0 0 1018 1262"
      fill="none"
      className="left-0 absolute z-10 top-[330%] md:top-[165%] lg:top-[310%] xl:top-[220%] 2xl:top-[260%] 3xl:top-0 xl:left-[10%] hidden md:flex"
    >
      <g filter="url(#filter0_f_12_139)">
        <path
          d="M993.757 1088.27L778.285 1237.33L23.9999 173.06L239.472 24L993.757 1088.27Z"
          fill="url(#paint0_radial_12_139)"
          fillOpacity="0.72"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_12_139"
          x="-6.10352e-05"
          y={0}
          width="1017.76"
          height="1261.33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={12}
            result="effect1_foregroundBlur_12_139"
          />
        </filter>
        <radialGradient
          id="paint0_radial_12_139"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(717.329 425.827) rotate(140.161) scale(397.932 397.062)"
        >
          <stop stopColor="#00BAF4" />
          <stop offset={1} stopColor="#12131A" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Register;
