import { motion } from "motion/react";
import type { FC } from "react";
import { animatedLetterVar, textContainerVar } from "../model/animations";

interface IProps {
  text: string;
}

const AnimatedText: FC<IProps> = ({ text }) => {
  return (
    <motion.div variants={textContainerVar} initial='hide' animate='show'>
      {text.split("").map((letter, i) => (
        <motion.p className='inline-block min-w-2 origin-bottom-left' key={`letter-${letter}-${i}`} variants={animatedLetterVar}>{letter}</motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
