import { Separator, Wrapper } from '../misc';
import { useAppSelector } from '@/hooks';

import styles from '../../styles/main.module.css';

import Image from 'next/image';

// часть сайта с криптовалютами

const Rates = () => {
  // получаем все данные о валютах с редакс слайса
  const rates = useAppSelector((state) => state.rates.rates);

  return (
    <>
      <main className="w-full bg-[#0B0F15] relative z-40 py-[100px]">
        <Wrapper>
          <div className={styles.rate_box}>
            <div className="relative top-[10%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <div className="relative top-[25%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <div className="relative top-[40%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <div className="relative top-[55%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <div className="relative top-[70%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <div className="relative top-[85%] z-10 w-full h-[0.5px] bg-[#6B8095]"></div>
            <ul>
              <li className="flex justify-between p-[16px]">
                <section>
                  <h3 className="text-[#6D799C] font-inter text-[16px] font-[500] ml-[10px]">
                    Asset
                  </h3>
                </section>
                <section className="flex mr-[70px] md:mr-[130px]">
                  <div className="min-[400px]:flex hidden">
                    <H3 text="Price" />
                  </div>
                  <div className="lg:flex hidden">
                    <H3 text="Change" />
                    <H3 text="Volume" />
                  </div>
                </section>
              </li>
              {rates.map((rate, index) => {
                if (rate[1] != undefined) {
                  return (
                    <Li
                      key={rate[1]}
                      coin={rate[0]}
                      alt={rate[1]}
                      price={Number(rate[2])}
                      change={Number(rate[3])}
                      volume={Number(rate[4])}
                    />
                  );
                }
              })}
            </ul>
          </div>
          <div className={styles.all_assets}>All assets</div>
        </Wrapper>
      </main>
      <Separator />
    </>
  );
};

interface LiProps {
  coin: string;
  alt: string;
  price: number;
  change: number;
  volume: number;
}

const Li = ({ coin, price, change, volume, alt }: LiProps) => {
  function formatNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  let src = '/icons/' + alt + '.svg';
  // если нет подходящей иконки, то используеться иконка биткоина
  if (
    alt != 'bnb' &&
    alt != 'btc' &&
    alt != '1inch' &&
    alt != 'busd' &&
    alt != 'eth' &&
    alt != 'matic'
  )
    src = '/icons/btc.svg';
  alt = alt.toUpperCase();
  return (
    <li className=" whitespace-nowrap flex justify-between p-[16px] ml-[10px] mt-[8px]">
      <section className="flex">
        <Image alt={alt} src={src} width={36} height={36} />
        <span className="text-text my-auto ml-3">{coin}</span>
        <span className=" text-[#525A71] my-auto ml-3 hidden sm:flex">
          {alt}
        </span>
      </section>
      <section className="flex mr-[10px] text-text">
        <span className="w-[80px] sm:w-[120px] min-[400px]:flex hidden">
          {'$' + price}
        </span>
        {change >= 0 ? (
          <span className="text-green-500 w-[120px] hidden lg:flex">
            {change + '%'}
          </span>
        ) : (
          <span className="text-red-500 w-[120px] hidden lg:flex">
            {change + '%'}
          </span>
        )}
        <span className=" hidden lg:flex w-[120px]">
          {formatNumber(volume) + 'м'}
        </span>
        <button
          className={
            'px-[16px] ml-[10px] sm:ml-[40px] md:ml-[60px] hover:text-default-black hover:bg-[#2FBDFC] transition duration-200' +
            ' border-[1px] border-[#2FBDFC] font-inter text-[#2FBDFC] rounded-md'
          }
        >
          Trade
        </button>
      </section>
    </li>
  );
};

interface H3Props {
  text: string;
}

const H3 = ({ text }: H3Props) => {
  return (
    <h3 className="text-[#6D799C] font-inter text-[16px] font-[500] w-[120px]">
      {text}
    </h3>
  );
};

export default Rates;
