'use client';
import Header from '@/components/header/header';
import Main from '@/components/main/main';
import Footer from '@/components/footer/footer';
import { store } from '@/store';
import { Provider } from 'react-redux';

import Intro from '@/components/main/intro';
import Rates from '@/components/main/rates';
import Sponsors from '@/components/main/sponsors';
import Features from '@/components/main/features';
import Register from '@/components/main/register';

// входная точка на сайт
export default function App() {
  return (
    // встраивает redux store в приложение
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <Rates />
        <Sponsors />
        <Features />
        <Register />
      </Main>
      <Footer />
    </>
  );
};
