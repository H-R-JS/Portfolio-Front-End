import React from "react";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../../OutPage/AnimCursor";

import { variHover } from "../VariantsSkills";

import nodeImg from "../SkillImg/node.png";
import firebaseImg from "../SkillImg/firebase.png";
import sqlImg from "../SkillImg/sql.png";

export const SkillBack = ({ variLogo, variSTChildren, variContainerLeft }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  const imgsSkills = [
    { src: nodeImg, skillName: "Node.js" },
    { src: firebaseImg, skillName: "Firebase" },
    { src: sqlImg, skillName: "MySQL" },
  ];

  return (
    <motion.article variants={variSTChildren} className="back-container">
      <h3> Back end </h3>
      <motion.figure
        variants={variContainerLeft}
        className="back-tech-container"
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
                alt="Technologie Back End"
                className="front-img"
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
