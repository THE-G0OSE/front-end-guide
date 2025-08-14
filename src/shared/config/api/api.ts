import type { RootState } from '@/app/providers/store'
import {fetchBaseQuery} from '@reduxjs/toolkit/query'

type fetchEndpoint = "LOGIN" | "REGISTRATION" | "ME" | "GET_ONE_COURSE" | "GET_MY_COURSES" | "CREATE_COURSE" | "DELETE_COURSE"

export const fetchQuery: Record<fetchEndpoint, string> = {
    "REGISTRATION": "register",
    "LOGIN": "login",
    "ME": "api/me",
    "GET_ONE_COURSE": "api/courses/getone/",
    "GET_MY_COURSES": "api/courses/getmy",
    "CREATE_COURSE": "api/courses/create",
    "DELETE_COURSE": "api/courses/delete/"
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