import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

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
};

export const Body = () => {
  return (
    <div>
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};
