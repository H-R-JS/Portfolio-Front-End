import React, { useState } from "react";
import { TiCog, TiArrowLeftThick } from "react-icons/ti";
import { motion } from "framer-motion";

export const Params = ({ toggleTheme, theme }) => {
  return (
    <div className="params-section">
      <div className="input-container">
        <span className="label-input">Inversez les couleurs</span>
        <label class="switch" onChange={toggleTheme} checked={theme === "dark"}>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="param-design-text">
        <span className="design-text">They will find you </span>
      </div>
    </div>
  );
};

export const IconParam = ({ paramToggle, appVariant, textVariant }) => {
  const IconCog = (
    <TiCog
      className="icon-params"
      onClick={() => {
        paramToggle.start("showParam");
        setIcon(IconArrow);
      }}
    />
  );

  const IconArrow = (
    <TiArrowLeftThick
      className="icon-params"
      onClick={() => {
        paramToggle.start("hiddenParam");
        setIcon(IconCog);
      }}
    />
  );

  const [icon, setIcon] = useState(IconCog);

  const variParamReveal = {
    hidden: { y: -110 },
    visible: { y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      variants={variParamReveal}
      initial="hidden"
      animate="visible"
      onMouseEnter={textVariant}
      onMouseLeave={appVariant}
    >
      {icon}
    </motion.div>
  );
};
