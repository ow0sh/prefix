import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { Init } from '@/models';

// redux слайс в котором хранятся курсы и тд валют

// всё состояние хранится в масиве масивов, выглядит криво
// но позволяет удобно изменять списки валют, удалять и добавлять новые
const initialState: Init = { rates: [] };
const rateSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    addRate: (state, action: PayloadAction<string[]>) => {
      if (state.rates.length == 7) return;
      const tmp = [...state.rates, action.payload];
      state.rates = tmp;
    },
    clearData: (state) => {
      state.rates = [];
    },
  },
});

export const { addRate, clearData } = rateSlice.actions;
export const selectRates = (state: RootState) => state.rates;
export default rateSlice.reducer;
