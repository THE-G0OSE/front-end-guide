import { useEffect, type FC } from "react"
import type { courseManageStage } from "../../sidebar/model/types"
import { useMotionValue, useSpring, useTransform } from "motion/react"
import { motion } from 'motion/react'

interface IProps {
    stage: courseManageStage
}

const stageToValue = {
    edit: 1,
    share: 2,
    settings: 3
}

const Tabs: FC<IProps> = ({stage}) => {

  const scrollValue = useMotionValue(stage ? stageToValue[stage] : 0)

  useEffect(() => {
    scrollValue.set(stage ? stageToValue[stage] : 0)
  }, [stage, scrollValue])

  const scrollSpring = useSpring(scrollValue, {stiffness: 50})

  const firstTabX = useTransform(scrollSpring, [0, 1, 2, 3], [300, 0, 0, 0])
  const firstTabY = useTransform(scrollSpring, [0, 1, 2, 3], [0, 0, 30, 60])
  const firstTabScale = useTransform(scrollSpring, [0, 1, 2, 3], [1, 1, .95, .9])

  const secondTabX = useTransform(scrollSpring, [0, 1, 2, 3], [300, 300, 0, 0])
  const secondTabY = useTransform(scrollSpring, [0, 1, 2, 3], [0, 0, 0, 30])
  const secondTabScale = useTransform(scrollSpring, [0, 1, 2, 3], [1, 1, 1, .95])

  const thirdTabX = useTransform(scrollSpring, [0, 1, 2, 3], [300, 300, 300, 0])
  const thirdTabY = useTransform(scrollSpring, [0, 1, 2, 3], [0, 0, 0, 0])
  const thirdTabScale = useTransform(scrollSpring, [0, 1, 2, 3], [1, 1, 1, 1])


  return (
    <div className="w-full min-h px-3 relative">
        <motion.div style={{x: firstTabX, y: firstTabY, scale: firstTabScale}} className="w-[calc(100%-1.5rem)] bg-desk absolute h-100 border border-font-desk rounded-2xl" ></motion.div>
        <motion.div style={{x: secondTabX, y: secondTabY, scale: secondTabScale}} className="w-[calc(100%-1.5rem)] bg-desk absolute h-100 border border-font-desk rounded-2xl" ></motion.div>
        <motion.div style={{x: thirdTabX, y: thirdTabY, scale: thirdTabScale}} className="w-[calc(100%-1.5rem)] bg-desk h-100 absolute border border-font-desk rounded-2xl" ></motion.div>
    </div>
  )
}

export default Tabs