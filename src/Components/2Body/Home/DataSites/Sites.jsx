import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CursorStyle } from "../../../OutPage/AnimCursor";

const SProgDetails1 = () => {
  return (
    <ul className="ul-sites-detail">
      <li className="li-sites-detail">SASS</li>
      <li className="li-sites-detail">React.js</li>
      <li className="li-sites-detail">Firebase</li>
    </ul>
  );
};

const SProgDetails2 = () => {
  return (
    <ul className="ul-sites-detail">
      <li className="li-sites-detail">SASS</li>
      <li className="li-sites-detail">React.js</li>
    </ul>
  );
};

const SProgDetails3 = () => {
  return (
    <ul className="ul-sites-detail">
      <li className="li-sites-detail">React.js</li>
      <li className="li-sites-detail">Node.js</li>
      <li className="li-sites-detail">MongoDB</li>
    </ul>
  );
};

export const ArraySites = [
  {
    title: "Meute2Rats",
    path: "https://meute2rats.netlify.app/",
    details: <SProgDetails1 />,
  },
  {
    title: "Photogralexphie",
    path: "https://photogralexphie.netlify.app/",
    details: <SProgDetails2 />,
  },
  {
    title: "MonGrimoire",
    path: "https://project-web-books-oqx414o1l-h-r-js-projects.vercel.app/",
    details: <SProgDetails3 />,
  },
];

export const AllSites = ({ variHChild1 }) => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 700;
      setIsMobile(isNowMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("isMobile updated:", isMobile);
  }, [isMobile]);

  return (
    <motion.ul variants={variHChild1} className="ul-sites">
      {ArraySites.map((item, index) => {
        return (
          <motion.li
            animate={{ height: isMobile ? 90 : 30 }}
            whileHover={!isMobile ? { height: 130 } : undefined}
            key={index}
            className="li-sites"
            onMouseEnter={() => AnimMouseHover()}
            onMouseLeave={() => AnimMouseOff()}
          >
            <Link
              to={item.path}
              className="link-sites"
              onMouseEnter={() => AnimMouseOn()}
              onMouseLeave={() => AnimMouseHover()}
            >
              {item.title}
            </Link>
            {item.details}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
