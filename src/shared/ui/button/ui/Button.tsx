import { motion, type HTMLMotionProps } from "motion/react";
import type { FC, ReactNode } from "react";
import type {
  ButtonAnimations,
  ButtonBorder,
  ButtonColors,
  ButtonTexts,
  ButtonTypes,
} from "../model/types";
import { fadeInVar, slideLeftVar, slideRightVar } from "../model/animations";

interface IProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  TYPE?: ButtonTypes;
  COLOR?: ButtonColors;
  TEXT?: ButtonTexts;
  BORDER?: ButtonBorder;
  ANIMATION?: ButtonAnimations;
  children: ReactNode;
}

const buttonStyles = {
  DEFAULT: " px-2 py-1 rounded-xl flex justify-center items-center gap-2 ",
  TYPE: {
    NORMAL: " text-lg ",
    BIG: " text-xl ",
  },
  COLOR: {
    DESK: " bg-desk ",
    TRANSPARENT: " bg-transparent ",
  },
  TEXT: {
    DESK: " text-font-desk ",
    RED: " text-red-400 ",
  },
  BORDER: {
    BORDER: " border border-font-desk ",
    BORDERLESS: " border-0 ",
  },
  ANIMATION: {
    FADE_IN: fadeInVar,
    SLIDE_LEFT: slideLeftVar,
    SLIDE_RIGHT: slideRightVar,
    NO: {},
  },
};

const Button: FC<IProps> = ({
  TYPE = "NORMAL",
  COLOR = "TRANSPARENT",
  TEXT = "DESK",
  BORDER = "BORDER",
  ANIMATION = "FADE_IN",
  children,
  className,
  ...props
}) => {
  const classNames = `${buttonStyles.DEFAULT} ${buttonStyles.TYPE[TYPE]} ${buttonStyles.COLOR[COLOR]} ${buttonStyles.TEXT[TEXT]} ${buttonStyles.BORDER[BORDER]} ${className} `;

  return (
    <motion.button
      variants={buttonStyles.ANIMATION[ANIMATION]}
      initial="hide"
      animate="show"
      exit="exit"
      className={classNames}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
