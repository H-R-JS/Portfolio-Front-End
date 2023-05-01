import React, { useEffect } from "react";
import { Header } from "./Header/Header";
import { Params, IconParam } from "./Params/Params";
import { motion, useAnimation } from "framer-motion";

export const HeaderParam = () => {
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
        <Header />
      </motion.div>
      <IconParam paramToggle={paramToggle} />
      <Params />
    </div>
  );
};
