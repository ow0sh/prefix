import Image from 'next/image';
import styles from '../../styles/main.module.css';
import { Separator } from '../misc';

// часть сайта, где описываються возможности сайта
const Features = () => {
  return (
    <>
      <main className="w-full bg-default-black z-50 relative">
        <div className="md:mx-[100px] lg:mx-[200px] py-[88px]">
          <ul className="flex flex-col items-center">
            <li className="flex flex-col md:flex-row justify-between">
              <Box
                src="/features/creditcard.svg"
                h1="User Safe Asset Fund (SAFU)world."
                h3="Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds."
              />
              <Box
                src="/features/eye.svg"
                h1="User Access Control"
                h3="Personalized access control allows you to limit the devices and addresses that can access your account."
              />
              <Box
                src="/features/lock.svg"
                h1="Improved data encryption"
                h3="Your transaction data is encrypted - only you can access your personal data."
              />
            </li>
            <li className="flex mt-[80px] flex-col md:flex-row justify-between">
              <Box
                src="/features/message.svg"
                h1="Support 24/7"
                h3="24/7 real-time support is always ready to help you."
              />
              <Box
                src="/features/rocket.svg"
                h1="Fast replineshments and withdraws"
                h3="Transfer funds to and from your accounts quickly and easily."
              />
              <Box
                src="/features/coinsswap.svg"
                h1="Comfortable P2P platform"
                h3="Top up your account in any convenient way on the P2P platform at favorable rates."
              />
            </li>
          </ul>
        </div>
      </main>
      <Separator />
    </>
  );
};

interface BoxProps {
  src: string;
  h1: string;
  h3: string;
}
const Box = ({ src, h1, h3 }: BoxProps) => {
  return (
    <div className="max-w-[307px] md:mt-0 mx-[20px] md:mx-[20px] mt-[30px]">
      <div className={styles.feature_box}>
        <Image src={src} alt="" width={32} height={32} className="mx-auto" />
      </div>
      <div className="flex flex-col">
        <span className="mt-[24px] max-w-[211px] text-text font-inter text-[20px] font-[469] leading-[145%]">
          {h1}
        </span>
        <span className="mt-[20px] max-w-[307px] text-[#464E62] text-[18px] font-inter font-[400] leading-[160%]">
          {h3}
        </span>
      </div>
    </div>
  );
};

export default Features;
