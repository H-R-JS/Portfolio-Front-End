import React, { useEffect } from "react";
import { Header } from "./Header/Header";
import { Params, IconParam } from "./Params/Params";
import { motion, useAnimation } from "framer-motion";

export const HeaderParam = ({
  appVariant,
  textVariant,
  setThemeSwitch,
  themeSwitch,
}) => {
  const paramToggle = useAnimation();

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
    <div className="header-param">
      <motion.div variants={variParam} animate={paramToggle}>
        <Header {...{ appVariant, textVariant }} />
      </motion.div>
      <IconParam paramToggle={paramToggle} {...{ appVariant, textVariant }} />
      <Params {...{ setThemeSwitch, themeSwitch }} />
    </div>
  );
};
