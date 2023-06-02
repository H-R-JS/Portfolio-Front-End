import React from "react";
import { PortfSlider } from "./PortfSlider";
import { PortfArray } from "./PortfArray";
import { RevealFadeLeft, RevealFadeRightPortf } from "../../Motion/Fade";
import { PortfWork } from "./PortfWork";

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
          <PortfWork />
        </RevealFadeLeft>
      </div>
    </section>
  );
};

/**<PortfSlider
            slides={PortfArray}
            {...{ appVariant, bodyVariant, textVariant, imgVariant, theme }}
          /> */
