import React, { useRef, useEffect } from "react";
import { CVLink } from "../Tools/CV/CVLink";
import { Tools } from "../Tools/Tools";
import { motion, useAnimation, useInView } from "framer-motion";
import { SkillFront } from "./SkillSection.jsx/SkillFront";
import { SkillBack } from "./SkillSection.jsx/SkillBack";
import {
  variSkillTools,
  variSTChildren,
  variContainerLeft,
  variLogo,
} from "./VariantsSkills";

export const Skills = () => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView, controlFade]); // eslint-disable-next-line react-hooks/exhaustive-deps

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
