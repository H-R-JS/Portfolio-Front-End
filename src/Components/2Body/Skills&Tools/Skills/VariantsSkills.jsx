export const variSkillTools = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.6 },
  },
};

export const variSTChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, when: "beforeChildren" },
  },
};

export const variContainerLeft = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

export const variLogo = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const variHover = {
  init: { scale: 1 },
  hover: { scale: 1.1 },
};
