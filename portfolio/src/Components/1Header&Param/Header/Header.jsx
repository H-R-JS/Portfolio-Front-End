import React from "react";
import { Navbar } from "./Navbar/Navbar";

export const Header = ({ appVariant, textVariant, theme }) => {
  return (
    <header id={theme}>
      <Navbar {...{ appVariant, textVariant, theme }} />
    </header>
  );
};
