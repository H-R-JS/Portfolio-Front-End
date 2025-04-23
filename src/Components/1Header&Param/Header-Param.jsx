import React, { useEffect } from "react";
import { Header } from "./Header/Header";
import { Params, IconParam } from "./Params/Params";
import { motion, useAnimation } from "framer-motion";

export const HeaderParam = ({
  appVariant,
  textVariant,
  toggleTheme,
  theme,
}) => {
  const iconShow = useAnimation();
  const paramToggle = useAnimation();

  const variIconShow = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variParam = {
    hiddenParam: {
      marginTop: "0px",
    },
    showParam: {
      marginTop: "80px",
    },
  };

  useEffect(() => {
    paramToggle.start("hiddenParam");
  }, []);

  return (
    <div
      className="header-param"
      onMouseEnter={() => iconShow.start("visible")}
      onMouseLeave={() => iconShow.start("hidden")}
    >
      <motion.div variants={variParam} animate={paramToggle}>
        <Header {...{ appVariant, textVariant, theme }} />
      </motion.div>
    </div>
  );
};

/**
   *  <motion.div
        variants={variIconShow}
        initial="hidden"
        animate={iconShow}
        className="icon-params-container"
      >
        <IconParam paramToggle={paramToggle} {...{ appVariant, textVariant }} />
      </motion.div>

      <Params {...{ toggleTheme, theme }} />
   */
