import { Button } from "@/shared/ui"
import { eiditingCourseSelection, setEditingCourse, useDeleteCourseMutation } from "@/entities/course"
import { useAppDispatch, useAppSelector } from "@hooks"
import { FaEdit, FaShare, FaTrash } from "react-icons/fa"
import { FaGear } from 'react-icons/fa6'
import { useState } from "react"
import type { courseManageStage } from "../model/types"
import Tabs from "../../tabs/ui/Tabs"


const Sidebar = () => {

  const {editingCourse} = useAppSelector(eiditingCourseSelection)
  const [deleteCourse] = useDeleteCourseMutation()
  const [stage, setStage] = useState<courseManageStage>(null)

  const editButtonClickHandler = () => setStage("edit")
  const settingsButtonClickHandler = () => setStage("settings")
  const shareButtonClickHandler = () => setStage("share")

  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    deleteCourse({ID: editingCourse!.ID})
    dispatch(setEditingCourse(null))
  }

  return (

    <div className='h-full p-2 border-1 border-font-desk flex flex-col gap-4 w-70 overflow-hidden absolute right-0 top-0'>
        <p className='font-bold text-wrap text-center w-full break-words text-2xl'>{editingCourse!.name}</p>
        <div className='overflow-x-hidden h-8 border-font-desk border rounded-full flex justify-evenly items-center'>
          <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={editButtonClickHandler}><FaEdit/></Button>
          <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={shareButtonClickHandler}><FaShare/></Button>
          <Button BORDER="BORDERLESS" ANIMATION="NO" onClick={settingsButtonClickHandler}><FaGear/></Button>
        </div>
        <Tabs stage={stage}/>
        <Button TEXT="RED" BORDER="BORDERLESS" ANIMATION="SLIDE_RIGHT" onClick={deleteHandler} className='absolute right-2 bottom-2'><FaTrash/></Button>
    </div>

  )

}

export default Sidebar