import React from "react";
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
      <li className="li-sites-detail">Bootstrap</li>
      <li className="li-sites-detail">SASS</li>
      <li className="li-sites-detail">Node.js</li>
    </ul>
  );
};

export const ArraySites = [
  {
    title: "Meute2Rats",
    classN: "li-sites",
    path: "https://Meute2Rats.fr/",
    details: <SProgDetails1 />,
  },
  {
    title: "Photogralexphie",
    classN: "li-sites one",
    path: "https://photogralexphie.fr/",
    details: <SProgDetails2 />,
  },
  {
    title: "Netflix Clone",
    classN: "li-sites two",
    path: "https://clone-project-n.netlify.app/",
    details: <SProgDetails3 />,
  },
];

export const AllSites = ({ variHChild1 }) => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();
  return (
    <motion.ul variants={variHChild1} className="ul-sites">
      {ArraySites.map((item, index) => {
        return (
          <motion.li
            whileHover={{ height: 150 }}
            key={index}
            className={item.classN}
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
