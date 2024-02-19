import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Theme } from "@/entities/app/model";
import { setTheme } from "@/entities/app/app-slice.ts";

export const useDarkMode = (): [Theme, (theme: Theme) => void] => {
  const theme = useSelector((state: RootState) => state.appReducer.theme);
  const dispatch = useDispatch();
  return [theme, (theme: Theme) => dispatch(setTheme(theme))];
};