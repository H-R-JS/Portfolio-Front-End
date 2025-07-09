import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AllSites } from "./DataSites/Sites";
import { AboutRight } from "./About/AboutRight";
import { AboutLeft } from "./About/AboutLeft";
import { CursorStyle } from "../../OutPage/AnimCursor";
import {
  variMainWave,
  variHome,
  variHChild,
  createWaveVariant,
} from "./VariantsHome";
import { ModalHome } from "./ModalHome";

export const Home = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const [showModal, setShowModal] = useState(false);

  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  // waves array with framer-motion function
  const waves = [
    { variant: createWaveVariant(765), className: "wave" },
    { variant: createWaveVariant(815), className: "wave two" },
    { variant: createWaveVariant(850), className: "wave three" },
  ];

  function toggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView, controlFade]); // eslint-disable-next-line react-hooks/exhaustive-deps

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
        <motion.article variants={variHChild} className="h-title-box">
          {/** TITLES*/}
          <motion.span className="h-title">Jordy Rocacher</motion.span>
          <motion.span className="h-title-two">
            Developpeur Full Stack Javascript
          </motion.span>
          <motion.button
            onClick={toggleModal}
            className="h-btn-me"
            onMouseEnter={() => AnimMouseOn()}
            onMouseLeave={() => AnimMouseOff()}
          >
            Presentation
          </motion.button>
          <ModalHome show={showModal} onClose={toggleModal} />
        </motion.article>
        {/** LINKS SITES WEB */}
        <motion.h3 variants={variHChild} className="h3-home">
          My Websites :
        </motion.h3>
        <AllSites {...{ variHChild }} />
        {/** ABOUT IN SQUARE */}
        <motion.aside
          variants={variHChild}
          onMouseEnter={() => AnimMouseHover()}
          onMouseLeave={() => AnimMouseOff()}
        >
          <AboutLeft />
        </motion.aside>
        <motion.aside
          variants={variHChild}
          onMouseEnter={() => AnimMouseHover()}
          onMouseLeave={() => AnimMouseOff()}
        >
          <AboutRight />
        </motion.aside>
      </motion.section>
      {/** THREE WAVES ANIMATES */}
      {waves.map(({ variant, className }, index) => (
        <motion.svg
          key={index}
          variants={variant}
          id="Mode_Isolation"
          data-name="Mode Isolation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 842.89 338.51"
          className={className}
        >
          <path
            className="cls-1"
            d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
          />
        </motion.svg>
      ))}
    </motion.main>
  );
};
