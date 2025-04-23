import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../OutPage/AnimCursor";

import {
  variFadeContact,
  getVariFadeCChildren,
  getVariContactBox,
} from "./VariantsContact";

export const Contact = () => {
  const { AnimMouseOff, AnimMouseOn } = CursorStyle();

  const mediaMatch = window.matchMedia("(max-width: 499px)");
  const [isMobile, setIsMobile] = useState(mediaMatch.matches);

  const controlBoxR = useAnimation();
  const controlBoxE = useAnimation();

  const variFadeCChildren = getVariFadeCChildren(isMobile);
  const variContactBox = getVariContactBox(isMobile);

  useEffect(() => {
    const paralMove = (e) => {
      const Move = document.querySelectorAll(".move");
      Move.forEach((move) => {
        const speed = move.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    document.addEventListener("mousemove", paralMove);
  }, []);

  useEffect(() => {
    function updateMedia(e) {
      setIsMobile(e.matches);
    }
    mediaMatch.addEventListener("change", updateMedia);
    return () => {
      mediaMatch.removeEventListener("change", updateMedia);
    };
  }, []);

  return (
    <main id="contact" className="contact-page">
      <section className="contact-container">
        <motion.article
          variants={variFadeContact}
          initial="hidden"
          animate="visible"
          className="contact-content move"
          data-speed="2"
        >
          <motion.aside
            variants={variFadeCChildren}
            initial="hiddenLeft"
            animate="visibleLeft"
            className="contact-aside-box res"
          >
            <motion.div
              variants={variContactBox}
              initial="init"
              animate={controlBoxR}
              className="contact-reseaux-box"
              onMouseEnter={() => {
                controlBoxE.start("hidden");
                controlBoxR.start("hoverRight");
              }}
              onMouseLeave={() => {
                controlBoxE.start("init");
                controlBoxR.start("init");
              }}
            >
              <h2 className="contact-h2">Networks</h2>
              <span className="span-link">
                <Link
                  to="https://www.instagram.com/jordy.rocacher/"
                  className="contact-link"
                  onMouseEnter={() => AnimMouseOn()}
                  onMouseLeave={() => AnimMouseOff()}
                >
                  Instagram
                </Link>
              </span>
              <span className="span-link">
                <Link
                  to="https://www.linkedin.com/in/jr-dev-front/"
                  className="contact-link"
                  onMouseEnter={() => AnimMouseOn()}
                  onMouseLeave={() => AnimMouseOff()}
                >
                  LinkedIn
                </Link>
              </span>
              <span className="span-link">
                <Link
                  to="https://github.com/H-R-JS"
                  className="contact-link"
                  onMouseEnter={() => AnimMouseOn()}
                  onMouseLeave={() => AnimMouseOff()}
                >
                  Github
                </Link>
              </span>
            </motion.div>
          </motion.aside>

          <div className="slash" />
          <motion.aside
            variants={variFadeCChildren}
            initial="hiddenRight"
            animate="visibleRight"
            className="contact-aside-box eml"
          >
            <motion.div
              variants={variContactBox}
              initial="init"
              animate={controlBoxE}
              className="contact-email-box"
              onMouseEnter={() => {
                controlBoxR.start("hidden");
                controlBoxE.start("hoverLeft");
              }}
              onMouseLeave={() => {
                controlBoxR.start("init");
                controlBoxE.start("init");
              }}
            >
              <h2 className="contact-h2">Email</h2>
              <Link
                to="mailto:jprogpro7@outlook.com"
                className="contact-link "
                onMouseEnter={() => AnimMouseOn()}
                onMouseLeave={() => AnimMouseOff()}
              >
                jprogpro7@outlook.com
              </Link>
            </motion.div>
          </motion.aside>
        </motion.article>
      </section>
    </main>
  );
};
