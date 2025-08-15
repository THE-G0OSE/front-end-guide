import { motion } from "motion/react";
import { btnContainerVar, tabVar } from "../model/animations";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import type { FC } from "react";
import {
  setEditingCourse,
  useDeleteCourseMutation,
  type Course,
} from "../model";
import { useAppDispatch } from "@hooks";
import { Button } from "@/shared/ui";

interface IProps {
  course: Course;
}

const CourseTab: FC<IProps> = ({ course }) => {
  const [deleteCourse] = useDeleteCourseMutation();
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    console.log("alo");
    deleteCourse({ ID: course.ID });
  };

  const clickHandler = () => {
    console.log("set");
    dispatch(setEditingCourse(course));
  };

  return (
    <motion.div
      key={`course-${course.ID}`}
      initial="hide"
      animate="show"
      whileHover="hover"
      className="w-full relative flex justify-center items-center h-15 px-2 py-1"
    >
      <motion.div
        variants={btnContainerVar}
        className="absolute h-13 flex justify-around items-center aspect-square"
      >
        <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={deleteHandler}>
          <FaTrashAlt />
        </Button>
        <Button BORDER="BORDERLESS" ANIMATION="NO">
          <FaEdit />
        </Button>
      </motion.div>
      <motion.div
        onClick={clickHandler}
        variants={tabVar}
        className="w-[calc(100%-8px)] px-2 py-1 text-xl flex justify-center items-center rounded-2xl absolute bg-desk h-13 bg- border-1 border-font-desk"
      >
        <p>{course.name}</p>
      </motion.div>
    </motion.div>
  );
};

export default CourseTab;
