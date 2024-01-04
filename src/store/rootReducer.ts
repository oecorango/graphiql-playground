import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import requestReducer from './requestSlice';
import responseReducer from './responseSlice';

export const rootReducer = combineReducers({
  userData: userReducer,
  requestData: requestReducer,
  responseData: responseReducer,
});
