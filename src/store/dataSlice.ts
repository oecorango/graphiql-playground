import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  request: '',
  response: '',
};

const dataSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    setRequest(state, action: PayloadAction<string>) {
      state.request = action.payload;
    },
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
  },
});

export const { setRequest, setResponse } = dataSlice.actions;

export default dataSlice.reducer;
