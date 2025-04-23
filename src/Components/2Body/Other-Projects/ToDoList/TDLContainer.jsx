import React from "react";
import { ToDoList } from "./ToDoList";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const TDLContainer = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();
  return (
    <main onMouseEnter={AnimMouseOn}>
      <ToDoList />
    </main>
  );
};
