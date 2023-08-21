import Image from 'next/image';
import { Separator, Wrapper } from '../misc';

// часть сайта с графиком

const Intro = () => {
  return (
    <>
      <Wrapper>
        <main className="bg-default-black h-[300px]">
          <div className="relative z-50 text-light-blue rounded-md mt-[40px] md:mt-[88px] bg-[#111624] border-t-[1px] border-[#131A2E] w-[340px] flex px-[12px]">
            <Image src={'/Subtractsmall.svg'} alt="" width={16} height={16} />
            <span className="font-medium ml-2">
              DECENTRALIZED CRYPTO PLATFORM
            </span>
          </div>
          <h1
            className={
              'mt-[30px] font-inter max-w-[700px] text-[32px] md:text-[60px] lg:text-[72px]' +
              ' font-[465px] sm:leading-[80px] relative z-50 text-text tracking-[-1.44px]'
            }
          >
            Buy, trade and store cryptocurrencies
          </h1>
          <div
            className={
              'bg-[url("/Group12.svg")] 2xl:w-[780px] xl:w-[640px] lg:w-[500px] md:w-[385px] sm:w-[480px] w-0' +
              ' h-[500px] absolute left-[25%] md:left-[50%] top-[10%] z-10'
            }
          />
          <div className="bg-[#1ea0ff52] blur-[200px] w-[780px] h-[180px] absolute left-0  lg:left-[20%] 2xl:left-[50%] z-40 top-[20%]" />
          <div className="bg-[#1ea0ff52] blur-[200px] w-[400px] h-[90px] absolute left-0 xl:left-[10%] z-40 top-[40%]" />

          <Chart />
          <div
            className={
              'flex max-w-[420px] rounded-md border-t-[1px] ' +
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
        </main>
      </Wrapper>
      <Separator />
    </>
  );
};

const Chart = () => {
  return (
    <div
      className={
        '2xl:flex hidden absolute left-[55%] top-[20%] w-[640px] h-[300px] z-50 rounded border flex-shrink-0  ' +
        'border-[#6B8095] border-opacity-60 bg-gradient-to-b from-[#1B2531] to-[#1C242C]'
      }
    >
      <div className="flex h-full">
        <section className="px-[16px] border-r-[1px] flex h-full border-[#6B8095]">
          <ul className="text-[#6B8095] font-inter text-[12px] font-[400px]">
            <li className="mt-[32px]">$ 3.0m</li>
            <li className="mt-[32px]">$ 2.5m</li>
            <li className="mt-[32px]">$ 2.0m</li>
            <li className="mt-[32px]">$ 1.5m</li>
            <li className="mt-[32px]">$ 1.0m</li>
          </ul>
        </section>
        <section className="max-w-full h-full flex flex-col">
          <div className="flex flex-col h-[300px]">
            <div className="relative top-[15%] z-10 w-[566px] h-[1px] bg-[#6B8095]"></div>
            <div className="relative top-[35%] z-10 w-[566px] h-[1px] bg-[#6B8095]"></div>
            <div className="relative top-[55%] z-10 w-[566px] h-[1px] bg-[#6B8095]"></div>
            <div className="relative top-[75%] z-10 w-[566px] h-[1px] bg-[#6B8095]"></div>
          </div>
          <footer>
            <ul className="flex absolute top-[80%] px-[15px] text-[#6B8095]">
              <Li
                text={'Jun'}
                src={'/groups/grp1.svg'}
                classname="relative bottom-[97%] left-[19%] z-50"
              />
              <Li
                text={'Jul'}
                src={'/groups/grp2.svg'}
                classname="relative bottom-[77%] left-[19%] z-50"
              />
              <Li
                text="Aug"
                src="/groups/grp3.svg"
                classname="relative bottom-[87.7%] left-[19%] z-50"
              />
              <Li
                text="Sep"
                src="/groups/grp4.svg"
                classname="relative bottom-[105%] left-[19%] z-50"
              />
              <Li
                text="Oct"
                src="/groups/grp5.svg"
                classname="relative bottom-[94.9%] left-[19%] z-50"
              />
              <Li
                text="Nov"
                src="/groups/grp6.svg"
                classname="relative bottom-[97%] left-[19%] z-50"
              />
              <Li
                text="Dec"
                src="/groups/grp7.svg"
                classname="relative bottom-[87.7%] left-[19%] z-50"
              />
              <Li
                text="Jan"
                src="/groups/grp8.svg"
                classname="relative bottom-[85.5%] left-[19%] z-50"
              />
              <Li
                text="Feb"
                src="/groups/grp9.svg"
                classname="relative bottom-[94.9%] left-[19%] z-50"
              />
            </ul>
          </footer>
        </section>
      </div>
    </div>
  );
};

interface LiProps {
  text: string;
  src: string;
  classname: string;
}

const Li = ({ text, src, classname }: LiProps) => {
  return (
    <li className="text-center mr-[25px]">
      {text}
      <br />
      2019
      <Image src={src} alt="" width={28} height={120} className={classname} />
    </li>
  );
};

export default Intro;
