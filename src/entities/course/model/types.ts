export type Course = {
    ID: number,
    CreatedAt: string,
    UpdatedAt: string,
    name: string,
    creator: number,
    levels: number[], 
} 

export interface IEditingCourseScheme {
    availableCourses: Course[],
    savedCourse: Course | null,
    editingCourse: Course | null,
    isCreating: boolean
}

export interface CourseCreateRequest {
    name: string
}

export interface GetCoursesResponse {
    courses: Course[]
}

export interface CourseDeleteRequest {
    ID: number
}