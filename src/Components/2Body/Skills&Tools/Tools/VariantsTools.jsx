export const variContainerRight = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
