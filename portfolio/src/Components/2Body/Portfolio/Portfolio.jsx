import React from "react";
import { PortfSlider } from "./PortfSlider";
import { PortfDescrip } from "./PortfDescrip";
import { PortfArray } from "./PortfArray";
import { RevealFadeLeft, RevealFadeRightPortf } from "../../Motion/Fade";

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
      <RevealFadeRightPortf>
        <PortfDescrip />
      </RevealFadeRightPortf>
    </section>
  );
};
