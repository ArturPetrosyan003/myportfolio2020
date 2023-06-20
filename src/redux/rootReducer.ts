import { combineReducers } from "redux";
import { SET_DARK_THEME, SET_LIGHT_THEME, CHANGE_COLOR } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme") || "dark",
  color: localStorage.getItem("color") || "#efa700",
};

export const themeReducer = (state = initialState.theme, action: any) => {
  switch (action.type) {
    case SET_DARK_THEME:
      localStorage.setItem("theme", "dark");
      return (state = "dark");
    case SET_LIGHT_THEME:
      localStorage.setItem("theme", "light");
      return (state = "light");
    default:
      return state;
  }
};

export const colorReducer = (state = initialState.color, action: any) => {
  switch (action.type) {
    case CHANGE_COLOR:
      localStorage.setItem("color", action.payload);
      return (state = action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  theme: themeReducer,
  color: colorReducer,
});
