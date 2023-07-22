import React, { useEffect, useState, useRef } from "react";
import { NavItems } from "../Navbar/NavItems";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../../OutPage/AnimCursor";

export const PhoneMenu = () => {
  const { AnimMouseOn, AnimMouseOff } = CursorStyle();

  const controlUl = useAnimation();
  const refNav = useRef();

  const [mQueyry, setMQuery] = useState({
    matches: window.innerWidth < 700 ? true : false,
  });

  const useMediaPhone = window.matchMedia("(max-width: 700px)");

  const variFadeHeader = mQueyry
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
      }
    : {
        hidden: { x: -250 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.7 } },
      };

  const variNavPhone = {
    hidden: { height: 100 },
    visible: { height: 350, transition: { duration: 0.1 } },
  };

  const variUlPhone = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "flex",
      transition: { duration: 0.4 },
    },
  };

  const variParamReveal = {
    hidden: { y: -110 },
    visible: { y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const [icon, setIcon] = useState("angle down");

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 700px)");
    document.addEventListener("resize", mediaQuery);

    const toggleNav = (e) => {
      if (
        !refNav.current.contains(e.target) ||
        e.target.href === window.location.href
      ) {
        controlUl.start("hidden");
        setIcon("angle down");
      } else {
        return null;
      }
    };
    document.addEventListener("click", toggleNav);
    return () => {
      document.removeEventListener("click", toggleNav);
      document.removeEventListener("resize", mediaQuery);
    };
  }, []);

  return (
    <motion.nav
      ref={refNav}
      variants={variNavPhone}
      initial="hidden"
      animate={controlUl}
      className="nav"
    >
      <h2 className="h2-phone">Menu</h2>

      <motion.ul
        variants={variUlPhone}
        initial="hidden"
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
      <motion.span
        variants={variParamReveal}
        initial="hidden"
        animate="visible"
      >
        <FaAngleDown
          className={icon}
          onClick={() => {
            controlUl.start("visible");
            setIcon("angle none");
          }}
        />
      </motion.span>
    </motion.nav>
  );
};
