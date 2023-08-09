import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../../../OutPage/AnimCursor";

const ArrayFront = [
  {
    src: require("../SkillImg/htmlcss.png"),
    className: "front-img n1",
    descrip: "HTML & CSS",
    classPer: "percentage",
  },
  {
    src: require("../SkillImg/js.png"),
    className: "front-img n2",
    descrip: "JAVASCRIPT",
    classPer: "percentage",
  },
  {
    src: require("../SkillImg/reactjs.png"),
    className: "front-img n3",
    descrip: "REACT",
    classPer: "percentage",
  },
  {
    src: require("../SkillImg/sass.png"),
    className: "front-img n4",
    descrip: "SASS",
    classPer: "percentage",
  },
  {
    src: require("../SkillImg/bootstrap.png"),
    className: "front-img n5",
    descrip: "BOOTSTRAP",
    classPer: "percentage",
  },
];

export const SkillFront = ({ variLogo, variSTChildren, variContainerLeft }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  const variHover = {
    init: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const variPer = {
    init: { opacity: 0.2 },
    hover: { opacity: 1 },
  };

  return (
    <motion.article variants={variSTChildren} className="front-container">
      <h3> Front End </h3>
      <motion.figure
        variants={variContainerLeft}
        className="front-tech-container"
        onMouseEnter={() => AnimMouseHover()}
        onMouseLeave={() => AnimMouseOff()}
      >
        {ArrayFront.map((item, index) => {
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
                className={item.className}
              />
              <span className={item.classPer}>{item.per}</span>
              <figcaption style={{ marginTop: "10px" }}>
                {item.descrip}
              </figcaption>
            </motion.figure>
          );
        })}
      </motion.figure>
    </motion.article>
  );
};
