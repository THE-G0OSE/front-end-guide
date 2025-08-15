import { Button } from "@/shared/ui"
import { eiditingCourseSelection, setEditingCourse, useDeleteCourseMutation } from "@/entities/course"
import { useAppDispatch, useAppSelector } from "@hooks"
import { FaTrash } from "react-icons/fa"

const Sidebar = () => {

  const {editingCourse} = useAppSelector(eiditingCourseSelection)

  const [deleteCourse] = useDeleteCourseMutation()

  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    deleteCourse({ID: editingCourse!.ID})
    dispatch(setEditingCourse(null))
  }

  return (

    <div className='h-full p-2 border-1 border-font-desk w-70 overflow-hidden absolute right-0 top-0'>
        <p className='font-bold w-full text-center text-2xl'>{editingCourse!.name}</p>
        <Button TEXT="RED" BORDER="BORDERLESS" ANIMATION="SLIDE_RIGHT" onClick={deleteHandler} className='absolute right-2 bottom-2'><FaTrash/></Button>
    </div>

  )

}

export default Sidebar