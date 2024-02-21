import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

export interface AppState {
  theme: Theme;
}

const initialState: AppState = {
  theme: "light"
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;