import Image from 'next/image';
import { Wrapper } from '../misc';
import styles from '@/styles/header.module.css';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-default-black w-full">
      <Wrapper>
        <div className="pt-[63px] flex justify-between">
          <section className="mr-[10px]">
            <Image
              src={'/footer/logo_footer.svg'}
              alt="footer_logo"
              width={200}
              height={37}
            />
            <ul className="flex mt-[48px]">
              <li className="mr-[16px]">
                <Image
                  src={'/footer/telegram.svg'}
                  alt="telegram"
                  width={30}
                  height={30}
                  className="border-light-blue hover:border-[3px] rounded-full cursor-pointer"
                />
              </li>
              <li className="mr-[16px]">
                <Image
                  src={'/footer/facebook.svg'}
                  alt="facebook"
                  width={30}
                  height={30}
                  className="border-light-blue hover:border-[3px] rounded-full cursor-pointer"
                />
              </li>
              <li className="mr-[16px]">
                <Image
                  src={'/footer/twitter.svg'}
                  alt="twitter"
                  width={30}
                  height={30}
                  className="border-light-blue hover:border-[3px] rounded-full cursor-pointer"
                />
              </li>
            </ul>
            <div className="flex mt-[45px] md:mt-[77px] md:mb-[80px]">
              <button className={styles.register}>Register</button>
              <button className={styles.log_in}>Log in</button>
            </div>
          </section>
          <section className="text-[#464E62] font-inter text-[18px] font-[445] flex">
            <ul>
              <Li text="Trade" />
              <Li text="P2P" />
              <Li text="Partners" />
              <Li text="Mining" />
              <Li text="Academy" />
            </ul>
            <ul className="ml-[20px] md:ml-[56px]">
              <Li text="Privacy policy" />
              <Li text="Terms of rules" />
            </ul>
          </section>
        </div>
        <div className="text-center text-[#464E62] pb-[32px] text-[18px] font-inter font-[445]">
          Bitlist© All Rights Reserved
        </div>
      </Wrapper>
    </footer>
  );
};

interface LiProps {
  text: string;
}

const Li = ({ text }: LiProps) => {
  return (
    <li className="mb-[12px] md:mb-[28px]">
      <span className="border-[#464E62] hover:border-b-[1px] cursor-pointer">
        {text}
      </span>
    </li>
  );
};

export default Footer;
