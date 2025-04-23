import React, { useState } from "react";
import { TiCog, TiArrowUpThick } from "react-icons/ti";
import { motion } from "framer-motion";

export const Params = ({ toggleTheme, theme }) => {
  return (
    <div className="params-section">
      <div className="input-container">
        <span className="label-input">Inversez les couleurs</span>
        <label class="switch" onChange={toggleTheme} checked={theme === "dark"}>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div className="input-container">
        <span className="label-input">Activer Boat Game</span>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
};

export const IconParam = ({ paramToggle }) => {
  const IconCog = (
    <TiCog
      className="icon-param"
      onClick={() => {
        paramToggle.start("showParam");
        setIcon(IconArrow);
      }}
    />
  );

  const IconArrow = (
    <TiArrowUpThick
      className="icon-param"
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
    <motion.div variants={variParamReveal} initial="hidden" animate="visible">
      {icon}
    </motion.div>
  );
};
