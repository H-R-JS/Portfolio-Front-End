import React, { useState, useRef, useEffect } from "react";
import { PortfArray } from "./PortfArray";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorStyle } from "../../OutPage/AnimCursor";

export const PortfWork = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const refPortf = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(refPortf.current.scrollWidth - refPortf.current.offsetWidth);
  }, []);

  const variFade = {
    hidden: { opacity: 0, display: "flex", x: -500 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5 } },
  };

  return (
    <article ref={refPortf} className="portf-section">
      <motion.section variants={variFade} initial="hidden" animate="show">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="portf-container-box"
        >
          {PortfArray.map((item, index) => {
            return (
              <div
                key={index}
                className="portf-box"
                onMouseEnter={() => AnimMouseHover()}
                onMouseLeave={() => AnimMouseOff()}
              >
                <div
                  className={item.class}
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                {item.infoB}
                <div className="portf-box-text">
                  <h3 className="box-h3">{item.title}</h3>
                  <p>{item.text}</p>
                  <Link
                    to={item.path}
                    className="link-web"
                    onMouseEnter={() => AnimMouseOn()}
                    onMouseLeave={() => AnimMouseHover()}
                  >
                    Lien vers le site Web
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.section>
    </article>
  );
};
