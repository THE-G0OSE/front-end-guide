import type { RootState } from '@/app/providers/store'
import {fetchBaseQuery} from '@reduxjs/toolkit/query'

type fetchEndpoint = "LOGIN" | "REGISTRATION" | "ME"

export const fetchQuery: Record<fetchEndpoint, string> = {
    "REGISTRATION": "register",
    "LOGIN": "login",
    "ME": "api/me"
}

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://thegoose-test.ru:3000/",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).AuthReducer.token
        if (token !== '') {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    },
});