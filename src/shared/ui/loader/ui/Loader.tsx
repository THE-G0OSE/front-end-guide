import { motion } from "motion/react";
import { loaderContainerVar, loaderPointVar } from "../model/animations";

const Loader = () => {
  return (
    <motion.div
      initial="hide"
      animate="load"
      variants={loaderContainerVar}
      className="flex"
    >
      <motion.div
        variants={loaderPointVar}
        className="aspect-square h-2 rounded-full bg-font-desk"
      />
      <motion.div
        variants={loaderPointVar}
        className="aspect-square h-2 rounded-full bg-font-desk"
      />
      <motion.div
        variants={loaderPointVar}
        className="aspect-square h-2 rounded-full bg-font-desk"
      />
    </motion.div>
  );
};

export default Loader;
