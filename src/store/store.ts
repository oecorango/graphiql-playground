import { configureStore } from '@reduxjs/toolkit';
import schemaReducer from './schemaSlice';
import userReducer from './userSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    schemaGraphQl: schemaReducer,
    user: userReducer,
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
