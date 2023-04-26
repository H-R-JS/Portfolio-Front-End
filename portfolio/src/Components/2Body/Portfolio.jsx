import React from "react";
import { PortfSlider } from "./Portfolio/PortfSlider";
import { PortfDescrip } from "./Portfolio/PortfDescrip";
import { PortfArray } from "./Portfolio/PortfArray";

export const Portfolio = () => {
  return (
    <section className="portf-section">
      <PortfSlider slides={PortfArray} />
      <PortfDescrip />
    </section>
  );
};
