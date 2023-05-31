import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export const Contact = ({ theme }) => {
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
      console.log(Move);
      Move.forEach((move) => {
        console.log(move);
        const speed = move.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", paralMove);
  });

  return (
    <section id="contact">
      <div className="contact-container" id={theme}>
        <div className="contact-content move" data-speed="2">
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
              id={theme}
            >
              Instagram
            </Link>
            <Link to="" className="contact-link" id={theme}>
              LinkdIn
            </Link>
          </motion.div>
          <div className="slash" />
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
              id={theme}
            >
              jprogpro7@outlook.com
            </Link>
          </motion.div>
          <div className="validation" />
        </div>
      </div>
    </section>
  );
};
