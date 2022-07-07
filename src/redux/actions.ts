import { SET_DARK_THEME, SET_LIGHT_THEME } from "./types";

export function setDarkTheme() {
    return {
        type: SET_DARK_THEME,
    };
}

export function setLightTheme() {
    return {
        type: SET_LIGHT_THEME,
    };
}
