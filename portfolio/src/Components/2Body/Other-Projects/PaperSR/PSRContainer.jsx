import React from "react";
import { PaperSR } from "./PaperSR";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const PSRContainer = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();
  return (
    <main onMouseEnter={AnimMouseOn}>
      <PaperSR />
    </main>
  );
};
