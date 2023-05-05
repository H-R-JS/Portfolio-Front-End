import React, { useState } from "react";
import { RevealFadeRightPortf } from "../../../Motion/Fade";
import { AboutText } from "./AboutText";

export const AboutMe = ({ appVariant, imgVariant, theme }) => {
  const [imgVisible, setImgVisible] = useState(false);

  const imgVisibleToggle = () => {
    if (window.scrollY >= 1400) {
      setImgVisible(true);
    } else {
      setImgVisible(false);
    }
  };

  window.addEventListener("scroll", imgVisibleToggle);

  return (
    <div className="about-me-container" id={theme}>
      <div className="about-text-container">
        <h2>À propos du sujet </h2>
        <AboutText />
      </div>
      <RevealFadeRightPortf>
        <div
          style={imgVisible ? { backgroundColor: "red" } : null}
          className="about-img-container"
          onMouseEnter={imgVariant}
          onMouseLeave={appVariant}
        >
          <div className={imgVisible ? "about-img-hidden" : "about-img one"} />
          <div className={imgVisible ? "about-img two" : "about-img-hidden"} />
          <span id={theme}>AAnomEE</span>
        </div>
      </RevealFadeRightPortf>
    </div>
  );
};
