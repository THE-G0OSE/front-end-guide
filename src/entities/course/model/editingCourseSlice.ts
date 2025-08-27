import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Course, IEditingCourseScheme } from "./types";
import type { RootState } from "@/app/providers/store";
import { logOut, setToken } from "@/features/auth";

const initialState: IEditingCourseScheme = {
    availableCourses: [],
    savedCourse: null,
    editingCourse: null,
    isCreating: false,
}

export const editingCourseSlice = createSlice({
    name: "editingCourse",
    initialState,
    reducers: {
        setAvailableCourses: (state, action: PayloadAction<Course[]>) => {
            state.availableCourses = action.payload
        },
        setSavedCourse: (state, action: PayloadAction<Course>) => {
            state.savedCourse = action.payload
        },
        setEditingCourse: (state, action: PayloadAction<Course | null>) => {
            state.editingCourse = action.payload
            state.isCreating = false
        },
        closeEditor: (state) => {
            state.availableCourses = [];
            state.editingCourse = null;
            state.savedCourse = null;
        },
        setIsCreating: (state, action: PayloadAction<boolean>) => {
            state.isCreating = action.payload
            state.editingCourse = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logOut, (state) => {state.availableCourses = []}).addCase(setToken, (state) => {state.availableCourses = []})
    }
})

export const editingCourseReducer = editingCourseSlice.reducer
export const {setEditingCourse, setIsCreating, setAvailableCourses, setSavedCourse, closeEditor} = editingCourseSlice.actions

export const eiditingCourseSelection = (state: RootState) => state.EditingCourseReducer