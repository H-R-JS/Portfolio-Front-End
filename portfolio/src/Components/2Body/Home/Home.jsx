import React, { useState } from "react";
import { RevealFadeLeft, RevealFadeRight } from "../../Motion/Fade";
import { motion } from "framer-motion";
import { AboutMe } from "./AboutMe/AboutMe";
import { AboutText } from "./AboutMe/AboutText";

export const Home = ({ appVariant, bodyVariant, textVariant, imgVariant }) => {
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
              Jordy Rocacher <br />
              Developpeur Front End
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
