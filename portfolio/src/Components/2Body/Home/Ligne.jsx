import React from "react";
import { motion } from "framer-motion";

export const Ligne = () => {
  const variLignCont = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.72 } },
  };

  const variLignes = {
    hidden: { transform: "scaleX(0)" },
    visible: { transform: "scaleX(1)" },
  };

  return (
    <motion.div
      variants={variLignCont}
      initial="hidden"
      animate="visible"
      className="lignes-container"
    >
      {DataStyleLigne.map((item, index) => {
        return (
          <motion.div
            variants={variLignes}
            key={index}
            className="lignes"
            style={{ width: item.width }}
          />
        );
      })}
    </motion.div>
  );
};

const DataStyleLigne = [
  { width: "700px", class: 1 },
  { width: "1150px", class: 1 },
  { width: "1700px", class: 1 },
];
