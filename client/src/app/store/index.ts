import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/entities/app/app-slice.ts";
import structureReducer from "@/entities/structure/structure-slice.ts";
import typeReducer from "@/entities/type/type-slice.ts";

export const store = configureStore({
  reducer: { appReducer, structureReducer, typeReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;