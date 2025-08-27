import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "@/shared/config";
import { type MeResponse, type LoginResponse, type LoginRequest, type RegisterRequest } from "./types";
import { logOut } from "./authSlice";
import { clearMessage, setMessage } from "@/features/monolog/model";
import { monologPhrases } from "@/shared/config/monolog/monologPhrases";
import { courseApiUtil } from "@/entities/course";

export const AuthApi = createApi({
    reducerPath: "AuthApi",
    baseQuery,
    endpoints: (builder) => ({
        registration: builder.mutation<void, RegisterRequest>({
            query: (body) => ({
                url: fetchQuery.REGISTRATION,
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: fetchQuery.LOGIN,
                method: "POST",
                body,
            }),
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(courseApiUtil.invalidateTags(["MY_COURSES"]))
                } catch (error) {
                    console.log(error)
                }
            }
        }),
        me: builder.query<MeResponse, void>({
            query: () => fetchQuery.ME,
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled;
                    dispatch(setMessage(monologPhrases["jwtCorrect"]))
                    setTimeout(() => dispatch(clearMessage()), 3500)
                } catch { 
                    dispatch(setMessage(monologPhrases["jwtExp"]))
                    dispatch(logOut())
                    setTimeout(() => dispatch(clearMessage()), 3500)
                }
            }
        }),
    }),
});

export const {useRegistrationMutation, useLoginMutation, useMeQuery} = AuthApi

export const authApiReducer = AuthApi.reducer;
export const authApiMiddleware = AuthApi.middleware;
