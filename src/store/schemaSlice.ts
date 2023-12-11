import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Schema = {
  queryType: object[];
  mutationType: object[];
  subscriptionType: object[];
};

type State = {
  schema: Schema;
};

type Action = {
  data: {
    __schema: Schema;
  };
};

const initialState: State = {
  schema: {
    queryType: [],
    mutationType: [],
    subscriptionType: [],
  },
};

const schemaSlice = createSlice({
  name: 'Schema GraphQl',
  initialState,

  reducers: {
    setSchema(state, action: PayloadAction<Action>) {
      state.schema.queryType = action.payload.data.__schema.queryType;
      state.schema.mutationType = action.payload.data.__schema.mutationType;
      state.schema.subscriptionType =
        action.payload.data.__schema.subscriptionType;
    },
  },
});

export const { setSchema } = schemaSlice.actions;

export default schemaSlice.reducer;
