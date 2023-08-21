import { configureStore } from '@reduxjs/toolkit';
import rateSlice from './slices/rates';

export const store = configureStore({
  reducer: {
    rates: rateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
