import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuthScheme, stage } from "./types";
import type { IStore } from "@/app/providers/store";

const token = window.localStorage.getItem('token')

const initialState: IAuthScheme = {
    currentStage: 'none',
    token: token || ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentStage: (state, action: PayloadAction<stage>) => {
            state.currentStage = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            window.localStorage.setItem('token', action.payload)
        },
        logOut: (state) => {
            state.token = '';
            window.localStorage.removeItem('token')
            alert('logout')
        }
    }
})


export const authReducer = authSlice.reducer
export const {setCurrentStage, setToken, logOut} = authSlice.actions
export const authSelection = (state: IStore) => state.AuthReducer