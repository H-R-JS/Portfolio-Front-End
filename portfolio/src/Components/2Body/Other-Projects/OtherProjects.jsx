import React from "react";
import { Link } from "react-router-dom";
import { CursorStyle } from "../../OutPage/AnimCursor";
import { motion } from "framer-motion";

export const OtherProjects = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const variParentProjects = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const variProjects = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };

  const projects = [
    {
      to: "/todo",
      src: require("./imgOtherP/todolist.png"),
      classLink: "link-project one",
      classImg: "img-project one",
      classH2: "h21",
      title: "To do List",
    },
    {
      to: "/quotes",
      src: require("./imgOtherP/quotes.png"),
      classLink: "link-project two",
      classImg: "img-project two",
      classH2: "h22",
      title: "Citation",
      title2: "Generator",
    },
    {
      to: "/paperSR",
      src: require("./imgOtherP/paperSR.png"),
      classLink: "link-project three",
      classImg: "img-project three",
      classH2: "h23",
      title: "Paper, Scissors, Rock",
    },
    {
      to: "https://netflix-clone-28bfb.web.app/",
      src: require("./imgOtherP/netflix.png"),
      classLink: "link-project four",
      classImg: "img-project four",
      classH2: "h24",
      title: "Netflix Clone",
    },
  ];
  return (
    <main className="main-project" onMouseEnter={AnimMouseOn}>
      <motion.section
        variants={variParentProjects}
        initial="hidden"
        animate="show"
        className="container-project"
      >
        {projects.map((item, index) => {
          return (
            <motion.article variants={variProjects}>
              <Link to={item.to} key={index} className={item.classLink}>
                <img src={item.src} className={item.classImg} />
                <h2 className={item.classH2}>{item.title}</h2>
                <h2 className={item.classH2}>{item.title2}</h2>
              </Link>
            </motion.article>
          );
        })}
      </motion.section>
    </main>
  );
};
