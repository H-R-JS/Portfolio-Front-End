import React, { useEffect, useState } from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const Navbar = () => {
  const { AnimMouseOn, AnimMouseOff } = CursorStyle();

  const mediaMatch = window.matchMedia("(max-width: 1150px)");

  const [mQueyry, setMQueyry] = useState(mediaMatch.matches);

  const variNavReveal = {
    hidden: { y: -80 },
    visible: { y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  const variFade = mQueyry
    ? {
        hidden: { background: "transparent", x: -150 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.9 } },
      }
    : {
        hidden: { background: "transparent", x: -250 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.9 } },
      };

  useEffect(() => {
    function updateMedia(e) {
      setMQueyry(e.matches);
    }
    mediaMatch.addEventListener("change", updateMedia);
    return () => {
      mediaMatch.removeEventListener("change", updateMedia);
    };
  });

  return (
    <motion.nav variants={variNavReveal} initial="hidden" animate="visible">
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="li-menu">
              <motion.div
                variants={variFade}
                initial="hidden"
                animate="show"
                className="background-li"
              />
              <Link
                to={item.path}
                className="link-menu"
                onMouseEnter={() => AnimMouseOn()}
                onMouseLeave={() => AnimMouseOff()}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};
