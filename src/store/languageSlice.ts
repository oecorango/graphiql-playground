import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = 'en' | 'ru';

type State = {
  language: Language;
};

const initialState: State = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
