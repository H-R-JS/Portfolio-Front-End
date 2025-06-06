export const variFadeContact = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
  visibleAfter: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.5 },
  },
};

export const variUpContact = {
  hidden: { opacity: 0 },
  up: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export const getVariFadeCChildren = (isMobile) => ({
  hiddenLeft: isMobile ? { opacity: 0, y: -200 } : { opacity: 0, x: -200 },
  hiddenRight: isMobile ? { opacity: 0, y: 200 } : { opacity: 0, x: 200 },
  visibleLeft: {
    opacity: 1,
    [isMobile ? "y" : "x"]: 0,
    transition: { duration: 0.4, delay: 0.4 },
  },
  visibleRight: {
    opacity: 1,
    [isMobile ? "y" : "x"]: 0,
    transition: { duration: 0.4, delay: 0.6 },
  },
});

export const getVariContactBox = (isMobile) => ({
  init: {
    opacity: 1,
    [isMobile ? "y" : "y"]: 0,
  },
  hoverLeft: {
    [isMobile ? "y" : "y"]: isMobile ? 0 : -50,
  },
  hoverRight: {
    [isMobile ? "y" : "y"]: isMobile ? 0 : -50,
  },
  hidden: { opacity: 0.3 },
});
