import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { CursorStyle } from "../../OutPage/AnimCursor";

export const Contact = () => {
  const { AnimMouseOff, AnimMouseOn } = CursorStyle();

  const controlBoxR = useAnimation();
  const controlBoxE = useAnimation();

  const variContactBox = {
    init: {
      opacity: 1,
      x: 0,
    },
    hoverLeft: {
      x: 50,
    },
    hoverRight: {
      x: -50,
    },
    hidden: { opacity: 0.3 },
  };

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

  const variFadeContact = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  const variFadeCChildren = {
    hiddenLeft: { opacity: 0, x: -200 },
    hiddenRight: { opacity: 0, x: 200 },
    visibleLeft: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.4 },
    },
    visibleRight: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.6 },
    },
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <motion.div
          variants={variFadeContact}
          initial="hidden"
          animate="visible"
          className="contact-content move"
          data-speed="2"
        >
          <motion.div
            variants={variFadeCChildren}
            initial="hiddenLeft"
            animate="visibleLeft"
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
              <h2 className="contact-h2">Réseaux</h2>
              <Link
                to="https://www.instagram.com/jordy.rocacher/"
                className="contact-link"
                onMouseEnter={() => AnimMouseOn()}
                onMouseLeave={() => AnimMouseOff()}
              >
                Instagram
              </Link>
              <Link
                to=""
                className="contact-link"
                onMouseEnter={() => AnimMouseOn()}
                onMouseLeave={() => AnimMouseOff()}
              >
                LinkdIn
              </Link>
            </motion.div>
          </motion.div>

          <div className="slash" />
          <motion.div
            variants={variFadeCChildren}
            initial="hiddenRight"
            animate="visibleRight"
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
          </motion.div>

          <div className="validation" />
        </motion.div>
      </div>
    </section>
  );
};
