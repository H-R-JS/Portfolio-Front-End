import React, { useRef, useEffect } from "react";
import { CVLink } from "../Tools/CV/CVLink";
import { Tools } from "../Tools/Tools";
import { motion, useAnimation, useInView } from "framer-motion";
import { SkillFront } from "./SkillSection.jsx/SkillFront";
import { SkillBack } from "./SkillSection.jsx/SkillBack";

export const Skills = () => {
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
        className="skills-section"
      >
        <SkillFront {...{ variLogo, variSTChildren, variContainerLeft }} />
        <SkillBack {...{ variLogo, variSTChildren, variContainerLeft }} />
      </motion.section>
      <motion.section
        variants={variSkillTools}
        initial="hidden"
        animate="visible"
        className="tools-section"
      >
        <Tools {...{ variLogo, variSTChildren }} />
        <CVLink {...{ variSTChildren }} />
      </motion.section>
    </main>
  );
};
