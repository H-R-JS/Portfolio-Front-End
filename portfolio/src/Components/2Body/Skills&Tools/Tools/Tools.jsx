import React from "react";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";
import { ToolsArray } from "./ToolsArray";

export const Tools = ({ theme, variLogo, variSTChildren }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  const variContainerRight = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const variHover = {
    init: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.article variants={variSTChildren} className="tools-article">
      <h2>Outils</h2>
      <motion.figure
        variants={variContainerRight}
        className="tools-container"
        onMouseEnter={() => AnimMouseHover()}
        onMouseLeave={() => AnimMouseOff()}
      >
        {ToolsArray.map((item, index) => {
          return (
            <motion.figure
              variants={variLogo}
              className="tools-background"
              id={theme}
              key={index}
            >
              <motion.img
                variants={variHover}
                initial="init"
                whileHover="hover"
                src={require(`${item.img}`)}
                className={item.classN}
                id={theme}
              />
              <figcaption>{item.descript}</figcaption>
            </motion.figure>
          );
        })}
      </motion.figure>
    </motion.article>
  );
};
