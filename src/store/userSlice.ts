import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string | null;
  id: string | null;
  email: string | null;
};

const initialState: User = {
  name: null,
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.name = action.payload.email;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.name = null;
      state.id = null;
      state.email = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
