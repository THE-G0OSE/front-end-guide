import { AnimatePresence, motion } from "motion/react";
import { firstWordVar, secondWordVar, thirdWordVar } from "../model/animations";

const Preview = () => {
  return (
    <div  className="w-full font-main text-[5rem] text-font-desk overflow-hidden h-full flex flex-col justify-center items-center">
      <AnimatePresence propagate>
        <motion.div
          key='first-word'
          variants={firstWordVar}
          initial="aside"
          animate="center"
          exit="aside"
        >
          конструктор
        </motion.div>
        <motion.div
          key='second-word' 
          variants={secondWordVar}
          initial='aside'
          animate='center'
          exit='aside'
        >ваших</motion.div>
        <motion.div
          key='third-word' 
          variants={thirdWordVar}
          initial='aside'
          animate='center'
          exit='aside'
        >курсов</motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Preview;
