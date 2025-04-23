export const variMainWave = {
  noWave: { opacity: 0 },
  wave: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.3 } },
};

export const createWaveVariant = (topPosition) => ({
  noWave: { top: 1000 },
  wave: { top: topPosition, transition: { duration: 0.4 } },
});

export const variHome = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2, staggerChildren: 0.4 },
  },
};

export const variHChild = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
