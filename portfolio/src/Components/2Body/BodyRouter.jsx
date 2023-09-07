import React from "react";
import { Home } from "./Home/Home";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";
import { OtherProjects } from "./Other-Projects/OtherProjects";
import { ToDoList } from "./Other-Projects/ToDoList/ToDoList";
import { Generator } from "./Other-Projects/Quote/Generator";
import { PaperSR } from "./Other-Projects/PaperSR/PaperSR";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

export const BodyRouter = ({ setSlide }) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/otherProjects" element={<OtherProjects />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/quotes" element={<Generator />} />
        <Route path="/paperSR" element={<PaperSR />} />
      </Routes>
    </AnimatePresence>
  );
};
