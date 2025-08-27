import { baseQuery, fetchQuery } from "@/shared/config";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type CourseRenameReauest, type Course, type CourseCreateRequest, type CourseDeleteRequest, type GetCoursesResponse } from "./types";
import { setAvailableCourses } from "./editingCourseSlice";

export const CourseApi = createApi({
  reducerPath: "CourseApi",
  baseQuery,
  tagTypes: ["MY_COURSES"],
  endpoints: (builder) => ({
    getOneCourse: builder.query<Course, void>({
      query: (id) => fetchQuery.GET_ONE_COURSE + id,
    }),
    getMyCourse: builder.query<GetCoursesResponse, void>({
      query: () => fetchQuery.GET_MY_COURSES,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAvailableCourses(data.courses));
        } catch (err) {
          console.log(err);
        }
      },
      providesTags: ["MY_COURSES"],
    }),
    createCourse: builder.mutation<Course, CourseCreateRequest>({
      query: (body) => ({
        url: fetchQuery.CREATE_COURSE,
        method: "POST",
        body,
      }),
      invalidatesTags: ["MY_COURSES"],
    }),
    deleteCourse: builder.mutation<void, CourseDeleteRequest>({
      query: (body) => ({
        url: fetchQuery.DELETE_COURSE + body.ID,
        method: "DELETE"
      }),
      invalidatesTags: ["MY_COURSES"]
    }),
    renameCourse: builder.mutation<void, CourseRenameReauest>({
      query: (body) => ({
        url: fetchQuery.PATCH_COURSE + body.ID,
        method: "PATCH",
        body: body.body
      }),
      invalidatesTags: ["MY_COURSES"]
    })
  }),
});

export const {
  useGetOneCourseQuery,
  useGetMyCourseQuery,
  useCreateCourseMutation,
  useDeleteCourseMutation,
} = CourseApi;
export const courseApiUtil = CourseApi.util

export const courseApiReducer = CourseApi.reducer;
export const courseApiMiddleware = CourseApi.middleware;

