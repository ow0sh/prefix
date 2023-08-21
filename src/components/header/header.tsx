import Image from 'next/image';
import styles from '@/styles/header.module.css';
import { Separator } from '../misc';

// Header сайта
// разделён на 2 компонента Left Right для удобства
const Header = () => {
  return (
    <>
      <header className="lg:px-[160px] md:px-[80px] px-[10px] bg-default-black relative overflow-hidden z-50 h-[80px] md:h-[100px] md:py-[32px] py-[24px] flex flex-col">
        <div className="flex justify-between">
          <Left />
          <Right />
        </div>
      </header>
      <Separator />
    </>
  );
};

const Left = () => {
  return (
    <section className="flex">
      <Image src={'/logo.svg'} alt="" width={200} height={35} />
      <Line />
      <div className="hidden sm:flex max-w-[400px] rounded-md border-t-[1px] border-border-gray bg-gray ">
        <div className="h-full flex px-3">
          <Image
            className="bg-gray"
            src={'/Iconlupa.svg'}
            alt=""
            width={15}
            height={15}
          />
        </div>
        <input
          className="text-text outline-none bg-gray w-full rounded-md"
          placeholder="Search"
        />
      </div>
    </section>
  );
};

const Right = () => {
  return (
    <section className="flex">
      <ul className="hidden my-auto xl:flex">
        <Li text="Trade" />
        <Li text="P2P" />
        <Li text="Partners" />
        <Li text="Mining" />
        <Li text="Academy" />
      </ul>
      <div className="hidden sm:flex">
        <Line />
      </div>
      <button className={styles.register}>Register</button>
      <button className={styles.log_in}>Log in</button>
    </section>
  );
};

interface LiProps {
  text: string;
}

const Li = ({ text }: LiProps) => {
  return (
    <li className="text-[#464E62] ml-[15px] hover:border-b-[1px] border-[#464E62] cursor-pointer">
      {text}
    </li>
  );
};

const Line = () => {
  return (
    <div className="h-[24px] my-auto w-[1px] mx-[10px] lg:mx-[30px] bg-[#252C41]" />
  );
};

export default Header;
