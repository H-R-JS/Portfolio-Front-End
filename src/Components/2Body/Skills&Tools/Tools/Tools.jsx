import React from "react";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";

import { variContainerRight } from "./VariantsTools";
import { variHover } from "../Skills/VariantsSkills";

export const Tools = ({ theme, variLogo, variSTChildren }) => {
  const { AnimMouseHover, AnimMouseOff } = CursorStyle();

  const ToolsArray = [
    {
      imgTool: "./ToolsImg/figmaC.png",
      classN: "tools-img n1",
      nameTool: "Figma",
    },
    {
      imgTool: "./ToolsImg/gitbashC.png",
      classN: "tools-img n2",
      nameTool: "Gitbash",
    },
    {
      imgTool: "./ToolsImg/githubC.png",
      classN: "tools-img n3",
      nameTool: "Github",
    },
    {
      imgTool: "./ToolsImg/vscodeC.png",
      classN: "tools-img n5",
      nameTool: "VSCode",
    },
  ];

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
                src={require(`${item.imgTool}`)}
                className={item.classN}
                id={theme}
              />
              <figcaption>{item.nameTool}</figcaption>
            </motion.figure>
          );
        })}
      </motion.figure>
    </motion.article>
  );
};
