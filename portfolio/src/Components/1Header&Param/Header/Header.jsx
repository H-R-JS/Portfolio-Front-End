import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { PhoneMenu } from "./PhoneMenu/PhoneMenu";
import { motion } from "framer-motion";
import Media from "react-media";

export const Header = () => {
  const variNavReveal = {
    hidden: { y: -80 },
    visible: { y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };
  return (
    <motion.header variants={variNavReveal} initial="hidden" animate="visible">
      <Media query="(max-width: 700px)">
        {(matches) => (matches ? <PhoneMenu /> : <Navbar />)}
      </Media>
    </motion.header>
  );
};

/**<Media query="(max-width: 800px)">
        {(matches) =>
          matches ? (
            <PhoneMenu />
          ) : (
            <Navbar {...{ appVariant, textVariant, theme }} />
          )
        }
      </Media> */
