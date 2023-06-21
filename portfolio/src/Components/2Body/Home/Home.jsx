import React, { useState, useRef, useEffect } from "react";
import { RevealFadeLeftHome, RevealFadeRight } from "../../Motion/Fade";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Ligne } from "./Ligne";

export const Home = ({ appVariant, bodyVariant, theme, setSlide }) => {
  const refFade = useRef();
  const isInView = useInView(refFade, { once: true });
  const controlFade = useAnimation();

  const variHText2 = {
    hidden: { top: 100 },
    visible: {
      top: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        transitionTimingFunction: "easeInOut",
      },
    },
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
      <RevealFadeLeftHome>
        <RevealFadeRight>
          <Link
            to="/aboutMe"
            className="white-square-left"
            onClick={() => setSlide("right")}
            onMouseEnter={bodyVariant}
            onMouseLeave={appVariant}
          ></Link>
        </RevealFadeRight>
        <section ref={refFade} className="home-section" id={theme}>
          <article
            className="h-title-box"
            onMouseEnter={bodyVariant}
            onMouseLeave={appVariant}
            id={theme}
          >
            <motion.span
              variants={variHText2}
              initial="hidden"
              animate={controlFade}
              className="h-title"
            >
              Jordy Rocacher
            </motion.span>
            <motion.span
              variants={variHText2}
              initial="hidden"
              animate={controlFade}
              className="h-title-two"
            >
              Developpeur Front End React
            </motion.span>
          </article>

          <h3 className="h3-home">Mes sites :</h3>
          <ul className="ul-sites">
            <motion.li
              variants={variLiSites}
              whileHover={{ height: 150 }}
              className="li-sites "
            >
              <Link className="link-sites">Meute2Rats</Link>
              <ul className="ul-sites-detail">
                <li className="li-sites-detail">Html & CSS</li>
                <li className="li-sites-detail">SASS</li>
                <li className="li-sites-detail">Javascript</li>
                <li className="li-sites-detail">React</li>
                <li className="li-sites-detail">Firebase</li>
              </ul>
            </motion.li>
            <motion.li
              variants={variLiSites}
              whileHover={{ height: 150 }}
              className="li-sites one"
            >
              <Link className="link-sites">Photogralexphie</Link>
            </motion.li>
            <motion.li
              variants={variLiSites}
              whileHover={{ height: 150 }}
              className="li-sites two"
            >
              <Link className="link-sites">Site refait</Link>
            </motion.li>
          </ul>
        </section>
      </RevealFadeLeftHome>
      <RevealFadeRight>
        <Link
          to="/aboutMe"
          className="white-square-right"
          onClick={() => setSlide("right")}
          onMouseEnter={bodyVariant}
          onMouseLeave={appVariant}
        ></Link>
      </RevealFadeRight>
    </main>
  );
};

/** <AboutMe {...{ appVariant, bodyVariant, imgVariant, theme }} />
 *
 *  <Ligne />
 *
 *
 */
