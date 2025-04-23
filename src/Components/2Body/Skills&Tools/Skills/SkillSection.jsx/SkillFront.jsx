import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../../../OutPage/AnimCursor";

import { variHover } from "../VariantsSkills";

import reactImg from "../SkillImg/reactjs.png";
import sassImg from "../SkillImg/sass.png";
import bootstrapImg from "../SkillImg/bootstrap.png";

const imgsSkills = [
  {
    src: reactImg,
    skillName: "React.js",
  },
  {
    src: sassImg,
    skillName: "SASS",
  },
  {
    src: bootstrapImg,
    skillName: "Bootstrap",
  },
];

export const SkillFront = ({ variLogo, variSTChildren, variContainerLeft }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  return (
    <motion.article variants={variSTChildren} className="front-container">
      <h3> Front End </h3>
      <motion.figure
        variants={variContainerLeft}
        className="front-tech-container"
        onMouseEnter={() => AnimMouseHover()}
        onMouseLeave={() => AnimMouseOff()}
      >
        {imgsSkills.map((item, index) => {
          return (
            <motion.figure
              key={index}
              variants={variLogo}
              className="front-img-container"
            >
              <motion.img
                variants={variHover}
                initial="init"
                whileHover="hover"
                src={item.src}
                alt="Technologie Front End"
                className="front-img "
              />
              <figcaption style={{ marginTop: "10px" }}>
                {item.skillName}
              </figcaption>
            </motion.figure>
          );
        })}
      </motion.figure>
    </motion.article>
  );
};
