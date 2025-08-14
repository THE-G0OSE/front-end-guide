import { eiditingCourseSelection, setEditingCourse, useDeleteCourseMutation } from "@/widgets/coure-constructor/model"
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

    <div className='h-full p-2 border-1 border-font-desk w-70 absolute right-0 top-0'>
        <p className='font-bold w-full text-center text-2xl'>{editingCourse!.name}</p>
        <button onClick={deleteHandler} className='absolute right-2 bottom-2 text-red-400'><FaTrash/></button>
    </div>

  )

}

export default Sidebar