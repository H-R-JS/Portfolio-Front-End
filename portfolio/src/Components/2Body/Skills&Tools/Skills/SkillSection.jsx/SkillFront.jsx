import React from "react";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../../OutPage/AnimCursor";

const ArrayFront = [
  {
    src: require("../SkillImg/htmlcss.png"),
    className: "front-img n1",
    descrip: "HTML & CSS",
  },
  {
    src: require("../SkillImg/js.png"),
    className: "front-img n2",
    descrip: "JAVASCRIPT",
  },
  {
    src: require("../SkillImg/reactjs.png"),
    className: "front-img n3",
    descrip: "REACT",
  },
  {
    src: require("../SkillImg/sass.png"),
    className: "front-img n4",
    descrip: "SASS",
  },
  {
    src: require("../SkillImg/bootstrap.png"),
    className: "front-img n5",
    descrip: "BOOTSTRAP",
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
        {ArrayFront.map((item, index) => {
          return (
            <motion.figure
              key={index}
              variants={variLogo}
              className="front-img-container"
            >
              <img
                src={item.src}
                alt="Technologie Front End"
                className={item.className}
              />
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

/** <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("./SkillImg/htmlcss.png")}
            alt="Technologie Front End"
            className="front-img"
          />
          <figcaption style={{ marginTop: "10px" }}>HTML & CSS</figcaption>
        </motion.figure>
        <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("./SkillImg/js.png")}
            alt="Technologie Front End"
            className="front-img"
          />
          <figcaption style={{ marginTop: "10px" }}>Javascript</figcaption>
        </motion.figure>
        <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("./SkillImg/reactjs.png")}
            alt="Technologie Front End"
            className="front-img"
          />
          <figcaption style={{ marginTop: "10px" }}>React</figcaption>
        </motion.figure>
        <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("./SkillImg/sass.png")}
            alt="Technologie Front End"
            className="front-img  n4"
          />
          <figcaption style={{ marginTop: "10px" }}>Sass</figcaption>
        </motion.figure>
        <motion.figure variants={variLogo} className="front-img-container">
          <img
            src={require("./SkillImg/bootstrap.png")}
            alt="Technologie Front End"
            className="front-img"
          />
          <figcaption style={{ marginTop: "10px" }}>Bootstrap</figcaption>
        </motion.figure> */
