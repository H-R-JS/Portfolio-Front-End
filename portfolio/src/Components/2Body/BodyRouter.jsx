import React from "react";
import { Home } from "./Home/Home";
import { Skills } from "./Skills&Tools/Skills/Skills";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";
import { ToDoList } from "./Other-Projects/ToDoList/ToDoList";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </AnimatePresence>
  );
};
