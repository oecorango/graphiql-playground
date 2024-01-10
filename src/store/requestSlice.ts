import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type requestState = {
  headers: HeadersInit;
  query: string;
  url: string;
  variables: Record<string, string>;
};

const initialState: requestState = {
  headers: {
    'Content-Type': 'application/json',
  },
  query: '',
  url: '',
  variables: {},
};

const requestSlice = createSlice({
  name: 'fetchData',
  initialState,
  reducers: {
    setHeaders(state, action: PayloadAction<string>) {
      try {
        const jsonString = action.payload.replace(/\n\s+/g, '');
        state.headers = JSON.parse(jsonString);
      } catch {
        console.warn('Headers is not valid');
      }
    },

    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },

    setURL(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },

    setVariables(state, action: PayloadAction<string>) {
      try {
        const jsonString = action.payload.replace(/\n\s+/g, '');
        state.variables = JSON.parse(jsonString);
      } catch {
        console.warn('Variables is not valid');
      }
    },
  },
});

export const { setQuery, setURL, setVariables, setHeaders } =
  requestSlice.actions;

export default requestSlice.reducer;
