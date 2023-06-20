import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutText } from "./AboutText";

export const AboutMe = ({ theme, setSlide }) => {
  const variAbout = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, delay: 1 } },
    exit: { opacity: 0, x: 1300, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      variants={variAbout}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="about-me-container"
      id={theme}
    >
      <img
        src={require("./me.jpg")}
        alt="Photo du créateur du porfolio"
        className="about-me-img"
      />

      <div className="about-text-container">
        <h2>À propos du sujet </h2>
        <AboutText />
      </div>
      <Link to="/" className="blue-square" onClick={() => setSlide("left")} />
    </motion.section>
  );
};
