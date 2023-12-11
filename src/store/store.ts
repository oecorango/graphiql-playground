import { configureStore } from '@reduxjs/toolkit';
import schemaReducer from './schemaSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    schemaGraphQl: schemaReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
