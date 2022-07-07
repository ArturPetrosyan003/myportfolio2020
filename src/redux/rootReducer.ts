import { combineReducers } from "redux";
import { SET_DARK_THEME, SET_LIGHT_THEME } from "./types";

export const initialState = {
    theme: "dark",
};

export const themeReducer = (state = initialState.theme, action: any) => {
    switch (action.type) {
        case SET_DARK_THEME:
            return (state = "dark");
        case SET_LIGHT_THEME:
            return (state = "light");
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    theme: themeReducer,
});
