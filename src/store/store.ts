import { configureStore } from '@reduxjs/toolkit';
import schemaReducer from './schemaSlice';

export const store = configureStore({
  reducer: {
    schemaGraphQl: schemaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
