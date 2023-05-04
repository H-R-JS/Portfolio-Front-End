import React, { useState } from "react";
import { RevealFadeLeft, RevealFadeRight } from "../../Motion/Fade";
import { easeInOut, motion } from "framer-motion";
import { AboutMe } from "./AboutMe/AboutMe";

export const Home = ({ appVariant, bodyVariant, imgVariant }) => {
  const variHText = {
    hidden: { top: 100 },
    visible: {
      top: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        transitionTimingFunction: "easeInOut",
      },
    },
  };
  return (
    <div>
      <div className="home-box" id="home">
        <RevealFadeLeft>
          <div className="home-text">
            <p className="h-text-1">Bonjour, je suis </p>
            <div
              className="h-text-2"
              onMouseEnter={bodyVariant}
              onMouseLeave={appVariant}
            >
              <div className="h-span-container">
                <motion.span
                  variants={variHText}
                  initial="hidden"
                  animate="visible"
                  className="h-span"
                >
                  Jordy Rocacher
                </motion.span>
              </div>
              <div className="h-span-container">
                <motion.span
                  variants={variHText}
                  initial="hidden"
                  animate="visible"
                  className="h-span"
                >
                  Developpeur Front End
                </motion.span>
              </div>
            </div>
            <p className="h-text-3">
              en autodidacte, j'ai appris le développement web seul, sans
              formation ni diplôme, uniquement avec ma motivation et l'envie de
              concevoir et créer à travers les langages de programmation
            </p>
          </div>
        </RevealFadeLeft>
        <RevealFadeRight>
          <div
            className="black-square"
            onMouseEnter={bodyVariant}
            onMouseLeave={appVariant}
          />
        </RevealFadeRight>
      </div>
      <AboutMe {...{ appVariant, bodyVariant, imgVariant }} />
    </div>
  );
};
