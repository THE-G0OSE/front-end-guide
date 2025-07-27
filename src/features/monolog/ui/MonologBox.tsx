import { useAppSelector } from "@hooks";
import { motion } from "motion/react";
import { monologSelection } from "../model";
import { monologVar } from "../model/animaions";
import { AnimatedText } from "@/shared/ui";

const MonologBox = () => {
  const { message } = useAppSelector(monologSelection);

  return (
    <motion.div
      variants={monologVar}
      initial="hide"
      animate={message ? "show" : "hide"}
      className="absolute bottom-0 w-screen h-40 px-4 py-2"
    >
      <div className="bg-black/60 w-full h-full border-2 border-black rounded-2xl text-font-monolog px-2 py-1">
        {message && <AnimatedText text={message}/>}
      </div>
    </motion.div>
  );
};

export default MonologBox;
