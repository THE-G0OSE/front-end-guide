import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "@/shared/config";
import { type MeResponse, type LoginResponse, type LoginRequest, type RegisterRequest } from "./types";

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
            })
        }),
        me: builder.query<MeResponse, void>({
            query: () => fetchQuery.ME,
        }),
    }),
});

export const {useRegistrationMutation, useLoginMutation, useMeQuery} = AuthApi

export const authApiReducer = AuthApi.reducer;
export const authApiMiddleware = AuthApi.middleware;
