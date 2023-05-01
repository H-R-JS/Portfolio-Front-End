import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const RevealFadeHeader = ({ children }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variFade = {
    hidden: { background: "transparent", x: -250 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.25 } },
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("show");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={refFade}
      variants={variFade}
      initial="hidden"
      animate={controlFade}
    >
      {children}
    </motion.div>
  );
};

export const RevealFadeTop = ({ children }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variFade = {
    hidden: { display: "flex", y: -700 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.25 } },
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("show");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={refFade}
      variants={variFade}
      initial="hidden"
      animate={controlFade}
    >
      {children}
    </motion.div>
  );
};

export const RevealFadeLeft = ({ children }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variFade = {
    hidden: { opacity: 0, display: "flex", x: -500 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5 } },
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("show");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={refFade}
      variants={variFade}
      initial="hidden"
      animate={controlFade}
    >
      {children}
    </motion.div>
  );
};

export const RevealFadeRight = ({ children }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variFade = {
    hidden: { opacity: 0, display: "flex", x: 200 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("show");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={refFade}
      variants={variFade}
      initial="hidden"
      animate={controlFade}
    >
      {children}
    </motion.div>
  );
};