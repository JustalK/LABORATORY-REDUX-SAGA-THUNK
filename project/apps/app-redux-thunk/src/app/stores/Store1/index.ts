import { configureStore } from '@reduxjs/toolkit';
import Slice1 from './Slices/Slice1';

export const store = configureStore({
  reducer: {
    counter: Slice1,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
