import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AllSites } from "./DataSites/Sites";
import { AboutRight } from "./About/AboutRight";
import { AboutLeft } from "./About/AboutLeft";
import { CursorStyle } from "../../OutPage/AnimCursor";

export const Home = () => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();
  /// FRAMER MOTION VARIANTS
  const variMainWave = {
    noWave: { opacity: 0 },
    wave: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.3 } },
  };

  const variWave = {
    noWave: { top: 1000 },
    wave: {
      top: 765,
      transition: { duration: 0.4 },
    },
  };

  const variWave2 = {
    noWave: { top: 1000 },
    wave: {
      top: 815,
      transition: { duration: 0.4 },
    },
  };

  const variWave3 = {
    noWave: { top: 1000 },
    wave: {
      top: 850,
      transition: { duration: 0.4 },
    },
  };

  const variHome = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        staggerChildren: 0.4,
      },
    },
  };

  const variHChild1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };
  /// FRAMER MOTION VARIANTS END

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  return (
    <motion.main
      variants={variMainWave}
      initial="noWave"
      animate="wave"
      className="home-page"
      id="home"
    >
      <motion.section
        ref={refFade}
        variants={variHome}
        initial="hidden"
        animate="visible"
        className="home-section"
      >
        <motion.article variants={variHChild1} className="h-title-box">
          {/** TITLES*/}
          <motion.span className="h-title">Jordy Rocacher</motion.span>
          <motion.span className="h-title-two">
            Developpeur Front End
          </motion.span>
        </motion.article>
        {/** LINKS SITES WEB */}
        <motion.h3 variants={variHChild1} className="h3-home">
          My Websites :
        </motion.h3>
        <AllSites {...{ variHChild1 }} />
        {/** ABOUT IN SQUARE */}
        <motion.aside
          variants={variHChild1}
          onMouseEnter={() => AnimMouseHover()}
          onMouseLeave={() => AnimMouseOff()}
        >
          <AboutLeft />
        </motion.aside>
        <motion.aside
          variants={variHChild1}
          onMouseEnter={() => AnimMouseHover()}
          onMouseLeave={() => AnimMouseOff()}
        >
          <AboutRight />
        </motion.aside>
      </motion.section>
      {/** THREE WAVES ANIMATES */}
      <motion.svg
        variants={variWave}
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave "
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </motion.svg>
      <motion.svg
        variants={variWave2}
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave two"
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </motion.svg>
      <motion.svg
        variants={variWave3}
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave three"
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </motion.svg>
    </motion.main>
  );
};
