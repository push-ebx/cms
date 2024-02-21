import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Structure } from "@/shared/model";

export type StructuresState = { structures: Structure[], currentStructure?: Structure };

const initialState: StructuresState = {
  structures: [],
  currentStructure: undefined
};

export const structureSlice = createSlice({
  name: "structure",
  initialState,
  reducers: {
    setStructures: (state, action: PayloadAction<Structure[]>) => {
      state.structures = action.payload;
    },
    addStructure: (state, action: PayloadAction<Structure>) => {
      state.structures.push(action.payload);
    },
    setCurrentStructure: (state, action: PayloadAction<{ struct_id: number }>) => {
      state.currentStructure = state.structures.find(struct => struct.id === action.payload.struct_id);
    }
  }
});

export const { setStructures, addStructure, setCurrentStructure } = structureSlice.actions;
export default structureSlice.reducer;