import { configureStore } from "@reduxjs/toolkit";
import nextBuyReducer from './profile/profileSlice'
export const store = configureStore({
  reducer: {
    nextBuy: nextBuyReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
