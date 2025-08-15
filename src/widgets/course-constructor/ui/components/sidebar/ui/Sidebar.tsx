import { CourseTab } from "@/entities/course";
import { Button } from "@/shared/ui";
import {
  eiditingCourseSelection,
  setIsCreating,
  useGetMyCourseQuery,
} from "@/entities/course";
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
      <Button
        onClick={createButtonClickHandler}
        className="w-[calc(100%-8px)]  bottom-2 h-13 ml-1"
      >
        <p className="text-2xl mb-2">создать</p>
        <FaPlus size={30} />
      </Button>
    </div>
  );
};

export default Sidebar;
