import React from "react";
import { PortfSlider } from "./PortfSlider";
import { PortfDescrip } from "./PortfDescrip";
import { PortfArray } from "./PortfArray";
import { RevealFadeLeft, RevealFadeRight } from "../../Motion/Fade";

export const Portfolio = ({
  appVariant,
  bodyVariant,
  textVariant,
  imgVariant,
}) => {
  return (
    <section className="portf-section" id="portfolio">
      <RevealFadeLeft>
        <PortfSlider
          slides={PortfArray}
          {...{ appVariant, bodyVariant, textVariant, imgVariant }}
        />
      </RevealFadeLeft>
      <RevealFadeRight>
        <PortfDescrip />
      </RevealFadeRight>
    </section>
  );
};
