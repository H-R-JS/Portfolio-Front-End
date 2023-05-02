import React from "react";
import { Navbar } from "./Navbar/Navbar";

export const Header = ({ appVariant, textVariant }) => {
  return (
    <header>
      <Navbar {...{ appVariant, textVariant }} />
    </header>
  );
};
