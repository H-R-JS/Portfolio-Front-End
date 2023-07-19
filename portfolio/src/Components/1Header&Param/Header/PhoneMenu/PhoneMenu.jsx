import React, { useState } from "react";
import { NavItems } from "../Navbar/NavItems";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const PhoneMenu = () => {
  const { AnimMouseOn, AnimMouseOff } = CursorStyle();

  const variFadeHeader = {
    hidden: { x: -250 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.7 } },
  };

  const controlUl = useAnimation();

  const variNavPhone = {
    hidden: { height: 100 },
    visible: { height: 350 },
  };

  const variUlPhone = {
    hidden: { display: "none" },
    visible: { display: "flex" },
  };
  const media700 = window.matchMedia("(max-width: 700px)");
  const query700 = media700.matches ? "hidden" : "visible";

  return (
    <motion.nav
      variants={variNavPhone}
      initial="hidden"
      animate={controlUl}
      className="nav"
    >
      <h2 className="h2-phone">Menu</h2>

      <motion.ul
        variants={variUlPhone}
        initial={query700}
        animate={controlUl}
        className="ul-menu"
      >
        {NavItems.map((item, index) => {
          return (
            <li key={index} className="li-menu">
              <motion.div
                variants={variFadeHeader}
                initial="hidden"
                animate="show"
              >
                <Link
                  to={item.path}
                  className="link-menu"
                  onMouseEnter={() => AnimMouseOn()}
                  onMouseLeave={() => AnimMouseOff()}
                >
                  {item.title}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
      <motion.span>
        <IconMenuPhone {...{ controlUl }} />
      </motion.span>
    </motion.nav>
  );
};

export const IconMenuPhone = ({ controlUl }) => {
  const IconCog = (
    <FaAngleDown
      className="angle down"
      onClick={() => {
        controlUl.start("visible");
        setIcon(IconArrow);
      }}
    />
  );

  const IconArrow = (
    <FaAngleUp
      className="angle up"
      onClick={() => {
        controlUl.start("hidden");
        setIcon(IconCog);
      }}
    />
  );

  const [icon, setIcon] = useState(IconCog);

  const variParamReveal = {
    hidden: { y: -110 },
    visible: { y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div variants={variParamReveal} initial="hidden" animate="visible">
      {icon}
    </motion.div>
  );
};
