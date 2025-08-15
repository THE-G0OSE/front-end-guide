import { Button } from "@/shared/ui";
import { useCreateCourseMutation } from "@/entities/course/model";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const CreateCourseMenu = () => {
 
  const inputRef = useRef<HTMLInputElement>(null)
  const [createCourse] = useCreateCourseMutation()

  const clickHandler = () => {
    createCourse({name: inputRef.current!.value})
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='flex gap-4'>
        <input ref={inputRef} className="px-2 py-1 rounded-xl border-font-desk border-1" />
        <Button BORDER="BORDERLESS" onClick={clickHandler}><FaPlus/></Button>
      </div>
    </div>
  );
};

export default CreateCourseMenu;
