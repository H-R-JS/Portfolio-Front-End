import React, { useRef, useEffect } from "react";
import { CVLink } from "../Tools/CV/CVLink";
import { Tools } from "../Tools/Tools";
import { motion, useAnimation, useInView } from "framer-motion";

export const Skills = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  const variSkillTools = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.6 },
    },
  };

  const variSTChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, when: "beforeChildren" },
    },
  };

  const variContainerLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const variLogo = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <main className="skills-tools" id="skills">
      <motion.section
        variants={variSkillTools}
        initial="hidden"
        animate="visible"
      >
        <motion.article variants={variSTChildren} className="front-container">
          <h3> Front End </h3>
          <motion.figure
            variants={variContainerLeft}
            className="front-tech-container"
          >
            <motion.figure variants={variLogo} className="front-img-container">
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
            </motion.figure>
          </motion.figure>
        </motion.article>
        <motion.article variants={variSTChildren} className="back-container">
          <h3> Back end </h3>
          <motion.figure
            variants={variContainerLeft}
            className="back-tech-container"
          >
            <motion.figure variants={variLogo} className="front-img-container">
              <img
                src={require("./SkillImg/firebase.png")}
                alt="Technologie Front End"
                className="front-img"
              />
              <figcaption style={{ marginTop: "10px" }}>Firebase</figcaption>
            </motion.figure>
          </motion.figure>
        </motion.article>
      </motion.section>
      <motion.section
        variants={variSkillTools}
        initial="hidden"
        animate="visible"
        className="tools-section"
      >
        <Tools {...{ theme, variLogo, variSTChildren }} />
        <CVLink {...{ variSTChildren }} />
      </motion.section>
    </main>
  );
};

/** 
 *  
 * 
        <div className="skill-section">
          <h2 className="skill-title" id={theme}>
            Compétences
          </h2>
          <div>
            {SkillsArray.map((item, index) => {
              return (
                <div key={index} className="skill-box">
                  <span className="span-title" id={theme}>
                    {item.title}
                  </span>
                  <div className="skill-bar" id={theme}>
                    <motion.div
                      ref={refFade}
                      variants={variSkillPer}
                      initial="hidden"
                      animate={controlFade}
                      className="skill-box-hidden"
                    />
                    <div
                      className="skill-per"
                      style={{ width: `${item.per}` }}
                      id={theme}
                    >
                      ABEDFABEDGGGOODD
                    </div>
                  </div>
                  <span className="percentage" id={theme}>
                    {item.per}
                  </span>
                </div>
              );
            })}
            <div className="skill-img"></div>
          </div>
        </div> */
