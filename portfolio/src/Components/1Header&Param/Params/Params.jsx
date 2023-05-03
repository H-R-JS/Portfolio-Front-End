import React, { useState } from "react";
import { TiCog, TiArrowLeftThick } from "react-icons/ti";

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

  return (
    <div onMouseEnter={textVariant} onMouseLeave={appVariant}>
      {icon}
    </div>
  );
};
