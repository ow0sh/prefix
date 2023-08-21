import Image from 'next/image';
import { Separator } from '../misc';

// часть сайта со спонсорами
const Sponsors = () => {
  return (
    <>
      <main className="w-full bg-default-black text-text">
        <div className="lg:px-[200px] md:px-[100px] px-[10px] lg:flex-row flex-col flex justify-between my-[88px]">
          <section>
            <h1 className="max-w-[680px] font-inter text-[28px] sm:text-[36px] md:text-[44px] font-[445] md:leading-[64px]">
              Bitles is your reliable guide in the world of digital assets
            </h1>
            <h4 className="mt-[10px] max-w-[640px] text-[#464E62] font-inter text-[12px] md:text-[14px] font-[400]">
              The Bitles app is a comprehensive solution for trading digital
              assets. Buy and sell cryptocurrencies quickly and openly,
              comfortably and safely from anywhere in the world.
            </h4>
          </section>
          <section className="flex justify-between mt-[50px] md:mt-0">
            <ul className="mr-[100px]">
              <li>
                <Image
                  src={'/sponsors/binance.svg'}
                  alt="binance"
                  width={240}
                  height={48}
                />
              </li>
              <li className="my-[40px] md:my-[80px]">
                <Image
                  src={'/sponsors/bitfnex.svg'}
                  alt="bitfnex"
                  width={240}
                  height={29}
                />
              </li>
              <li>
                <Image
                  src={'/sponsors/kraken.svg'}
                  alt="kraken"
                  width={191}
                  height={30}
                />
              </li>
            </ul>
            <ul>
              <li>
                <Image
                  src={'/sponsors/bybit.svg'}
                  alt="bybit"
                  width={120}
                  height={48}
                />
              </li>
              <li className="my-[28px] md:my-[69px]">
                <Image
                  src={'/sponsors/cryptocom.svg'}
                  alt="cryptocom"
                  width={240}
                  height={46}
                />
              </li>
              <li>
                <Image
                  src={'/sponsors/coinbase.svg'}
                  alt="coinbase"
                  width={196}
                  height={35}
                />
              </li>
            </ul>
          </section>
          <div className="bg-[#39B8FF] blur-[200px] w-[200px] h-[90px] absolute z-10 top-[180%] md:top-[130%] md:left-[30%] lg:top-[110%] 2xl:top-[200%] left-[20px]" />
          <div className="bg-[#39B8FF] blur-[150px] w-[200px] h-[90px] absolute z-10 top-[200%] md:top-[160%] lg:top-[130%] 2xl:top-[220%] lg:left-[60%] xl:left-[70%]" />
        </div>
      </main>
      <Separator />
    </>
  );
};

export default Sponsors;
