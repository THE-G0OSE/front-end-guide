import { motion } from "motion/react";
import { btnContainerVar, tabVar } from "../model/animations";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { type FC } from "react";
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
    deleteCourse({ ID: course.ID });
  };

  const clickHandler = () => {
    console.log("set");
    dispatch(setEditingCourse(course));
  };

  return (
    <motion.div
      initial="hide"
      animate="show"
      className="w-full relative flex justify-center items-center h-15 px-2 py-1"
      whileHover="hover"
    >
      <motion.div
        variants={btnContainerVar}
        className="absolute h-13 flex justify-around items-center aspect-square"
      >
        <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={deleteHandler}>
          <FaTrashAlt />
        </Button>
        <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={clickHandler}>
          <FaEdit />
        </Button>
      </motion.div>

      <motion.div
        variants={tabVar}
        className="w-[calc(100%-8px)] px-2 py-1 text-xl overflow-hidden flex justify-center items-center rounded-2xl absolute bg-desk h-13 border-1 border-font-desk"
      >
        <p
          onClick={clickHandler}
          className="text-ellipsis absolute text-nowrap w-[95%] overflow-hidden"
        >
          {course.name}
        </p>
      </motion.div>
    </motion.div>
  );
};
export default CourseTab;
