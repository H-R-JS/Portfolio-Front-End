import React from "react";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../../OutPage/AnimCursor";

export const SkillBack = ({ variLogo, variSTChildren, variContainerLeft }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();
  return (
    <motion.article variants={variSTChildren} className="back-container">
      <h3> Back end </h3>
      <motion.figure
        variants={variContainerLeft}
        className="back-tech-container"
        onMouseEnter={() => AnimMouseHover()}
        onMouseLeave={() => AnimMouseOff()}
      >
        <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("../SkillImg/firebase.png")}
            alt="Technologie Front End"
            className="front-img"
          />
          <figcaption style={{ marginTop: "10px" }}>Firebase</figcaption>
        </motion.figure>
      </motion.figure>
    </motion.article>
  );
};
