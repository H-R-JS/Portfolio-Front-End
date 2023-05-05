import React, { useState, useRef, useEffect } from "react";
import { RevealFadeLeftHome, RevealFadeRight } from "../../Motion/Fade";
import { motion, useAnimation, useInView } from "framer-motion";
import { AboutMe } from "./AboutMe/AboutMe";

export const Home = ({ appVariant, bodyVariant, imgVariant, theme }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variHText1 = {
    hidden: { top: 100 },
    visible: {
      top: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        transitionTimingFunction: "easeInOut",
      },
    },
  };

  const variHText2 = {
    hidden: { top: 100 },
    visible: {
      top: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        transitionTimingFunction: "easeInOut",
      },
    },
  };

  const variHText3 = {
    hidden: { bottom: 150 },
    visible: {
      top: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        transitionTimingFunction: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div className="home-box" id="home">
        <RevealFadeLeftHome>
          <div ref={refFade} className="home-text" id={theme}>
            <div className="h-container text-1">
              <motion.span
                variants={variHText1}
                initial="hidden"
                animate={controlFade}
                className="h-text-1"
              >
                Identité du sujet :
              </motion.span>
            </div>

            <div
              className="h-text-2"
              onMouseEnter={bodyVariant}
              onMouseLeave={appVariant}
              id={theme}
            >
              <div className="h-container">
                <motion.span
                  variants={variHText2}
                  initial="hidden"
                  animate={controlFade}
                  className="h-span"
                >
                  Jordy Rocacher
                </motion.span>
              </div>
              <div className="h-container">
                <motion.span
                  variants={variHText2}
                  initial="hidden"
                  animate={controlFade}
                  className="h-span"
                >
                  Developpeur Front End
                </motion.span>
              </div>
            </div>
            <div className="h-container text-3">
              <motion.p
                variants={variHText3}
                initial="hidden"
                animate={controlFade}
                className="h-text-3"
              >
                en autodidacte, j'ai appris le développement web seul, sans
                formation ni diplôme, uniquement avec ma motivation et l'envie
                de concevoir et créer à travers les langages de programmation
              </motion.p>
            </div>
          </div>
        </RevealFadeLeftHome>
        <RevealFadeRight>
          <div
            className="black-square"
            onMouseEnter={bodyVariant}
            onMouseLeave={appVariant}
          />
        </RevealFadeRight>
      </div>
      <AboutMe {...{ appVariant, bodyVariant, imgVariant, theme }} />
    </div>
  );
};
