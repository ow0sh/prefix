import { FC, PropsWithChildren, useEffect } from 'react';
import { MarketResponce } from '@/models';
import { useAppDispatch } from '@/hooks';
import { addRate, clearData } from '@/slices/rates';

// основная часть приложения
const Main: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  // тут подгружаються все данные о валютах с апи коингеко,
  // после записываються в редакс слайс
  useEffect(() => {
    const fetchData = async () => {
      try {
        // получаем данные о топ 100 валютах
        const responce = await fetch(
          ' https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
        );
        if (!responce.ok) throw new Error('Failed to fetch');
        const result: MarketResponce[] = await responce.json();
        dispatch(clearData());

        // тут, прописываем 6 токенов, которые отображаться на сайте (6 макс)
        const displayedTokens = ['btc', 'eth', 'busd', 'bnb', 'matic', '1inch'];

        let counter = 0;
        // получаем данные о токенах, которые прописаны в displayedTokens
        // и записываем в редакс слайс
        result.map((market) => {
          displayedTokens.map(async (token: string) => {
            if (counter >= 6) return;
            if (market.symbol == token) {
              const tmp = [
                market.name,
                market.symbol,
                String(market.current_price),
                String(market.price_change_percentage_24h),
                String(market.total_volume),
              ];
              const i = displayedTokens.indexOf(token);
              displayedTokens.splice(i, 1);
              dispatch(addRate(tmp));
              counter++;
            }
          });
        });

        // валюты, которые не входят в топ 100, обрабатываються тут
        // не сделал всё приложение таким образом, из-за ограничений в апи (пришлось выкручиваться)
        if (displayedTokens.length != 0) {
          displayedTokens.map(async (token) => {
            if (counter >= 6) return;
            try {
              const tokenResponce = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' +
                  token +
                  '&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
              );
              if (!tokenResponce.ok) throw new Error('Failed to fetch token');
              const tokenResult: MarketResponce[] = await tokenResponce.json();
              if (tokenResult.length == 0) return;
              const market = tokenResult[0];
              const tmp = [
                market.name,
                market.symbol,
                String(market.current_price),
                String(market.price_change_percentage_24h),
                String(market.total_volume),
              ];
              dispatch(addRate(tmp));
            } catch (error) {
              console.error(error);
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    let callonce = false;
    if (!callonce) {
      fetchData();
      callonce = true;
    }
    const intervalTime = 60 * 1000;
    const interval = setInterval(() => fetchData(), intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return <main>{children}</main>;
};

export default Main;
