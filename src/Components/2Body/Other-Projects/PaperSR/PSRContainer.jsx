import React from "react";
import { PaperSR } from "./PaperSR";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const PSRContainer = () => {
  const { AnimMouseOn } = CursorStyle();
  return (
    <main onMouseEnter={AnimMouseOn}>
      <PaperSR />
    </main>
  );
};
