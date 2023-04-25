import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  const controlParam = useAnimation();
  const variAnimParam = {
    static: {
      transform: "rotate(0deg)",
    },
    rotation: {
      transform: "rotate(360deg)",
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <header>
      <Navbar />
      <motion.div className="rotate-container"></motion.div>
    </header>
  );
};
