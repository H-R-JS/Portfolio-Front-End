import React, { useRef, useEffect } from "react";
import { SkillsArray } from "./SkillsArray";
import { CVLink } from "../CVLink";
import { Tools } from "../Tools/Tools";
import { RevealFadeBottom } from "../../../Motion/Fade";
import { motion, useAnimation, useInView } from "framer-motion";

export const Skills = ({ theme }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  const variSkillPer = {
    hidden: { transform: "scaleX(1)" },
    visible: {
      transform: "scaleX(0)",
      transition: {
        duration: 2,
        delay: 1,
        transitionTimingFunction: "ease-out",
      },
    },
  };

  return (
    <main className="skills-tools" id="skills">
      <section>
        <article className="front-container">
          <h3> Front End </h3>
          <figure className="front-tech-container">
            <figure className="front-img-container">
              <img
                src={require("./SkillImg/htmlcss.png")}
                alt="Technologie Front End"
                className="front-img"
              />
              <figcaption style={{ marginTop: "10px" }}>HTML & CSS</figcaption>
            </figure>
            <figure className="front-img-container">
              <img
                src={require("./SkillImg/js.png")}
                alt="Technologie Front End"
                className="front-img"
              />
              <figcaption style={{ marginTop: "10px" }}>Javascript</figcaption>
            </figure>
            <figure className="front-img-container">
              <img
                src={require("./SkillImg/reactjs.png")}
                alt="Technologie Front End"
                className="front-img"
              />
              <figcaption style={{ marginTop: "10px" }}>React</figcaption>
            </figure>
          </figure>
        </article>
        <article className="back-container">
          <h3> Back end </h3>
          <figure className="front-img-container">
            <img
              src={require("./SkillImg/firebase.png")}
              alt="Technologie Front End"
              className="front-img"
            />
            <figcaption style={{ marginTop: "10px" }}>Firebase</figcaption>
          </figure>
        </article>
      </section>
      <CVLink />
      <Tools {...{ theme }} />
    </main>
  );
};

/** 
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
