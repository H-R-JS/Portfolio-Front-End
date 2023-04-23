import React from "react";
import { PortfSlider } from "./Portfolio/PortfSlider";
import { PortfDescrip } from "./Portfolio/PortfDescrip";
import { PortfArray } from "./Portfolio/PortfArray";

export const Portfolio = () => {
  return (
    <section className="portf-section">
      <h2>Portfolio</h2>
      <PortfSlider slides={PortfArray} />
      <PortfDescrip />
    </section>
  );
};
