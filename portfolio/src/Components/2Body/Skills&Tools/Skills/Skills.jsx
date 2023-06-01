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
    <section className="skills-tools" id="skills">
      <RevealFadeBottom>
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
        </div>
        <CVLink />
        <Tools {...{ theme }} />
      </RevealFadeBottom>
    </section>
  );
};
