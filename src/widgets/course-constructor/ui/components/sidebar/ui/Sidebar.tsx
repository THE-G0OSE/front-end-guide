import { CourseTab } from "@/entities/course";
import { Button, Loader } from "@/shared/ui";
import {
  eiditingCourseSelection,
  setIsCreating,
  useGetMyCourseQuery,
} from "@/entities/course";
import { useAppDispatch, useAppSelector } from "@hooks";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import NoContent from "./components/noContent/ui/NoContent";

const Sidebar = () => {
  const { error, isFetching } = useGetMyCourseQuery();
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
    <div className="h-full w-50 flex flex-col Eustify-between border-r relative scrollbar border-font-desk overflow-x-hidden" >
      <div className='flex flex-col mt-2'>
      {
        availableCourses!.map((course) => <CourseTab key={course.ID} course={course} />)
      }
      {
        availableCourses.length === 0 && <NoContent/>
      }
      </div>
      <Button
        onClick={createButtonClickHandler}
        className="w-[calc(100%-8px)] mb-3 h-13 ml-1"
      >
        <p className="text-2xl mb-2">создать</p>
        <FaPlus size={30} />
      </Button>
      {isFetching && <div className='absolute top-2 left-2'><Loader/></div>}
    </div>
  );
};

export default Sidebar;
