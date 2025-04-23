import React from "react";
import { Home } from "./Home/Home";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";
import { OtherProjects } from "./Other-Projects/OtherProjects";

import { TDLContainer } from "./Other-Projects/ToDoList/TDLContainer";
import { Generator } from "./Other-Projects/Quote/Generator";
import { PSRContainer } from "./Other-Projects/PaperSR/PSRContainer";

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
        <Route path="/otherProjects" element={<OtherProjects />} />
        <Route path="/todo" element={<TDLContainer />} />
        <Route path="/quotes" element={<Generator />} />
        <Route path="/paperSR" element={<PSRContainer />} />
      </Routes>
    </AnimatePresence>
  );
};

//<Route path="/test987" element={<Test />} />
