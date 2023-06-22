import React, { useState, useRef, useEffect } from "react";
import { RevealFadeLeftHome, RevealFadeRight } from "../../Motion/Fade";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Ligne } from "./Ligne";
import { ArraySProg1, ArraySites } from "./DataSites/Sites";

export const Home = ({ appVariant, bodyVariant, theme, setSlide }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variHome = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const variHChild1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const variLiSites = {
    //hidden: { height: "auto" },
    visible: {},
  };

  useEffect(() => {
    if (isInView) {
      controlFade.start("visible");
    }
  }, [isInView]);

  return (
    <main className="home-page" id="home">
      <motion.section
        ref={refFade}
        variants={variHome}
        initial="hidden"
        animate="visible"
        className="home-section"
        id={theme}
      >
        <motion.article
          variants={variHChild1}
          className="h-title-box"
          onMouseEnter={bodyVariant}
          onMouseLeave={appVariant}
          id={theme}
        >
          <motion.span className="h-title">Jordy Rocacher</motion.span>
          <motion.span className="h-title-two">
            Developpeur Front End React
          </motion.span>
        </motion.article>
        <motion.h3 variants={variHChild1} className="h3-home">
          Mes sites :
        </motion.h3>
        <motion.ul variants={variHChild1} className="ul-sites">
          {ArraySites.map((item, index) => {
            return (
              <motion.li
                variants={variLiSites}
                whileHover={{ height: 150 }}
                key={index}
                className={item.classN}
              >
                <Link className="link-sites">{item.title}</Link>
                {item.details}
              </motion.li>
            );
          })}
        </motion.ul>
        <motion.aside variants={variHChild1}>
          <Link
            to="/aboutMe"
            className="white-square-left"
            onClick={() => setSlide("right")}
            onMouseEnter={bodyVariant}
            onMouseLeave={appVariant}
          />
        </motion.aside>
      </motion.section>

      <RevealFadeRight>
        <Link
          to="/aboutMe"
          className="white-square-right"
          onClick={() => setSlide("right")}
          onMouseEnter={bodyVariant}
          onMouseLeave={appVariant}
        ></Link>
      </RevealFadeRight>

      <svg
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave one"
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </svg>

      <svg
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave two"
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </svg>

      <svg
        id="Mode_Isolation"
        data-name="Mode Isolation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 842.89 338.51"
        className="wave three"
      >
        <path
          class="cls-1"
          d="m674,.5c-42.1,0-42.1,22-84.19,22S547.72.5,505.62.5s-42.09,22-84.19,22S379.34.5,337.25.5s-42.09,22-84.19,22S210.97.5,168.87.5s-42.09,22-84.19,22S42.59.5.5.5v337.51h841.89V.5c-42.1,0-42.1,22-84.19,22S716.1.5,674,.5Z"
        />
      </svg>
    </main>
  );
};

/** <AboutMe {...{ appVariant, bodyVariant, imgVariant, theme }} />
 *
 *  <Ligne />
 *
 *
 */
