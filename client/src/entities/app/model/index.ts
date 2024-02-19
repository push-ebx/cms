import * as actionTypes from "./action-types";

export type Theme = "dark" | "light";
export type ThemeAction = { type: string, theme: Theme };
export type App = { theme: Theme };

const initialState: App = {
  theme: "light"
};

const appReducer = (
  state: App = initialState,
  action: ThemeAction
): App => {
  switch (action.type) {
    case actionTypes.SET_THEME: {
      const { theme } = action;
      console.log("ТЕМА: ", theme);
      state.theme = theme;
      console.log("state:", state);
      return state;
    }
  }

  return state;
};

export { appReducer };