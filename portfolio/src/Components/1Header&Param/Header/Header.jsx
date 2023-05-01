import React, { useEffect } from "react";
import { Navbar } from "./Navbar/Navbar";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
