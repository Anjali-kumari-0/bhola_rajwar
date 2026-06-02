export const slideLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};