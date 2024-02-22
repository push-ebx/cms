import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Type } from "@/shared/model";

export type TypesState = { types: Type[]};

const initialState: TypesState = {
  types: []
};

export const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setTypes: (state, action: PayloadAction<Type[]>) => {
      state.types = action.payload;
    },
    addType: (state, action: PayloadAction<Type>) => {
      state.types.push(action.payload);
    }
  }
});

export const { setTypes, addType} = typeSlice.actions;
export default typeSlice.reducer;