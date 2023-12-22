import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type requestState = {
  headers: NonNullable<unknown>;
  query: string;
  url: string;
  variable: NonNullable<unknown>;
};

const initialState: requestState = {
  headers: {},
  query: '',
  url: '',
  variable: {},
};

const requestSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    setHeaders(state, action: PayloadAction<object>) {
      state.headers = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setURL(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
    setVariable(state, action: PayloadAction<object>) {
      state.variable = action.payload;
    },
  },
});

export const { setQuery, setURL, setVariable, setHeaders } =
  requestSlice.actions;

export default requestSlice.reducer;
