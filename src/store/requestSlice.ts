import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type requestState = {
  headers: string;
  query: string;
  url: string;
  variable: string;
};

const initialState: requestState = {
  headers: '',
  query: '',
  url: '',
  variable: '',
};

const requestSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setURL(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setVariable(state, action: PayloadAction<string>) {
      state.variable = action.payload;
    },
  },
});

export const { setQuery, setURL, setVariable, setHeaders } =
  requestSlice.actions;

export default requestSlice.reducer;
