import { TargetAndTransition, Transition, Variants } from "framer-motion";

export const scaleXAnimation: Variants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 },
};

export const opacityAnimation: Variants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

export const hoverTransition: Transition = {
  duration: 0.15,
  ease: "easeOut",
};

export const layoutTransition: Transition = {
  duration: 0.25,
  ease: "easeInOut",
};

export const whileTap: TargetAndTransition = {
  scale: 0.9,
  opacity: 0.8,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20,
  },
};
