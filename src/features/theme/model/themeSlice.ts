import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { theme } from "./types";
import type { IStore } from "@/app/providers/store/model/types";

const initialState = {
  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme") as theme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<theme>) => {
       state.theme = action.payload
       localStorage.setItem('theme', action.payload) 
    },
    toggleTheme: (state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', state.theme === "light" ? 'dark' : 'light')
    }
  },
});

export const themeReducer = themeSlice.reducer;
export const { setTheme, toggleTheme } = themeSlice.actions;
export const ThemeSelection = (state: IStore) => state.ThemeReducer;