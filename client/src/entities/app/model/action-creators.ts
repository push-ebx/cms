import * as actionTypes from "./action-types.ts";
import { Theme, ThemeAction } from "./index.ts";

export const setTheme = (theme: Theme) => {
  const action: ThemeAction = {
    type: actionTypes.SET_THEME,
    theme
  };
  console.log(action);
  return action;
};