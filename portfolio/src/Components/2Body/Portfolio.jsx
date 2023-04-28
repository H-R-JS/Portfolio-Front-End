import React from "react";
import { PortfSlider } from "./Portfolio/PortfSlider";
import { PortfDescrip } from "./Portfolio/PortfDescrip";
import { PortfArray } from "./Portfolio/PortfArray";
import { RevealFadeLeft, RevealFadeRight } from "../Motion/Fade";

export const Portfolio = () => {
  return (
    <section className="portf-section" id="portfolio">
      <RevealFadeLeft>
        <PortfSlider slides={PortfArray} />
      </RevealFadeLeft>
      <RevealFadeRight>
        <PortfDescrip />
      </RevealFadeRight>
    </section>
  );
};
