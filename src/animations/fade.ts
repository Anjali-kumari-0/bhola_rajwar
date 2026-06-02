import { MOTION_CONFIG } from "./motion.config";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: MOTION_CONFIG.duration,
      ease: MOTION_CONFIG.ease,
    },
  },
};