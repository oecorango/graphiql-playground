import { combineReducers } from '@reduxjs/toolkit';
import schemaReducer from './schemaSlice';
import userReducer from './userSlice';
import requestReducer from './requestSlice';
import responseReducer from './responseSlice';

export const rootReducer = combineReducers({
  schemaGraphQl: schemaReducer,
  userData: userReducer,
  requestData: requestReducer,
  responseData: responseReducer,
});
