import { CourseTab } from "@/entities/course";
import {
  eiditingCourseSelection,
  setIsCreating,
  useGetMyCourseQuery,
} from "@/widgets/coure-constructor/model";
import { useAppDispatch, useAppSelector } from "@hooks";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const { error, isLoading } = useGetMyCourseQuery();
  const { availableCourses } = useAppSelector(eiditingCourseSelection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const createButtonClickHandler = () => {
    dispatch(setIsCreating(true));
  };

  return (
    <div className="h-full w-50 border-r relative scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-white/0 [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-font-desk scrollbar-track-transparent scrollbar-track-rounded border-font-desk overflow-x-hidden" >
      {!isLoading &&
        !error &&
        availableCourses.length > 0 &&
        availableCourses!.map((course) => <CourseTab course={course} />)}
      <button
        onClick={createButtonClickHandler}
        className="w-[calc(100%-8px)] mt-5 h-13 flex ml-1 justify-center gap-2 items-center border-1 border-font-desk rounded-2xl"
      >
        <p className="text-2xl mb-2">создать</p>
        <FaPlus size={30} />
      </button>
    </div>
  );
};

export default Sidebar;
