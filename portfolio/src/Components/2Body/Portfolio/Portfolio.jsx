import React from "react";
import { PortfSlider } from "./PortfSlider";
import { PortfArray } from "./PortfArray";
import { RevealFadeLeft, RevealFadeRightPortf } from "../../Motion/Fade";

export const Portfolio = ({
  appVariant,
  bodyVariant,
  textVariant,
  imgVariant,
  theme,
}) => {
  return (
    <section id="portfolio">
      <div className="portf-section" id={theme}>
        <RevealFadeLeft>
          <PortfSlider
            slides={PortfArray}
            {...{ appVariant, bodyVariant, textVariant, imgVariant, theme }}
          />
        </RevealFadeLeft>
      </div>
    </section>
  );
};
