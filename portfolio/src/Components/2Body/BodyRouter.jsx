import React from "react";
import { Home } from "./Home/Home";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact";

export const Body = ({ appVariant, bodyVariant, textVariant, imgVariant }) => {
  return (
    <div>
      <Home {...{ appVariant, bodyVariant, textVariant, imgVariant }} />
      <Skills />
      <Portfolio {...{ appVariant, bodyVariant, textVariant, imgVariant }} />
      <Contact />
    </div>
  );
};

/**
 * 
   import { AnimatePresence } from "framer-motion";
   import { Routes, Route, useLocation } from "react-router-dom";  
 * 
 * export const BodyRouter = () => {
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
