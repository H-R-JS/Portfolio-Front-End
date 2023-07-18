import React from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { RevealFadeHeader } from "../../../Motion/Fade";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const Navbar = () => {
  const { AnimMouseOn, AnimMouseOff } = CursorStyle();

  const variNavReveal = {
    hidden: { y: -80 },
    visible: { y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  return (
    <motion.nav variants={variNavReveal} initial="hidden" animate="visible">
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="li-menu">
              <div className="background-li" />
              <RevealFadeHeader>
                <Link
                  to={item.path}
                  className="link-menu"
                  onMouseEnter={() => AnimMouseOn()}
                  onMouseLeave={() => AnimMouseOff()}
                >
                  {item.title}
                </Link>
              </RevealFadeHeader>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
