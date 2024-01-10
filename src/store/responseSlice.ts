import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ResponseState = {
  response: string;
};

const initialState: ResponseState = {
  response: '',
};

const responseSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
  },
});

export const { setResponse } = responseSlice.actions;

export default responseSlice.reducer;
