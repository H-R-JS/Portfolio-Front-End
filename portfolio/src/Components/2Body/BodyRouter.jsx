import React from "react";
import { Home } from "./Home/Home";
import { AboutMe } from "./Home/AboutMe/AboutMe";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";
import { PDFCV } from "./Skills&Tools/Tools/CV/CV";

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
export const BodyRouter = ({ setSlide }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home {...{ setSlide }} />} />
        <Route path="/aboutMe" element={<AboutMe {...{ setSlide }} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export const Body = ({
  appVariant,
  bodyVariant,
  textVariant,
  imgVariant,
  theme,
}) => {
  return (
    <div>
      <Home {...{ appVariant, bodyVariant, textVariant, imgVariant, theme }} />
      <Skills {...{ theme }} />
      <Portfolio
        {...{ appVariant, bodyVariant, textVariant, imgVariant, theme }}
      />
      <Contact {...{ theme }} />
    </div>
  );
};

/**
 * 
   import { AnimatePresence } from "framer-motion";
   import { Routes, Route, useLocation } from "react-router-dom";  
  export const BodyRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}; */
