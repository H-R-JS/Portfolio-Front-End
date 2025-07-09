import React, { useState, useRef, useEffect } from "react";
import { PortfArray } from "./PortfArray";
import { motion } from "framer-motion";
import { CursorStyle } from "../../OutPage/AnimCursor";
import { PortfItem } from "./PortfItem";

export const PortfWork = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const refPortf = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    const updateWidth = () => {
      if (!refPortf.current) return;
      const fullWidth = refPortf.current.scrollWidth;
      const visibleWidth = refPortf.current.offsetWidth;
      const scrollDistance = fullWidth - visibleWidth;
      setWidth(scrollDistance > 0 ? scrollDistance : 0);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (refPortf.current) {
      resizeObserver.observe(refPortf.current);
    }

    return () => {
      if (refPortf.current) {
        resizeObserver.unobserve(refPortf.current);
      }
    };
  }, []);

  const variFade = {
    hidden: { opacity: 0, display: "flex", x: -500 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5 } },
  };

  return (
    <article ref={refPortf} className="portf-section">
      <motion.section variants={variFade} initial="hidden" animate="show">
        <p
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            background: "white",
            zIndex: 9999,
          }}
        >
          width: {width} <br />
          scrollWidth: {refPortf.current?.scrollWidth} <br />
          offsetWidth: {refPortf.current?.offsetWidth}
        </p>
        <motion.div
          drag="x"
          ref={refPortf}
          dragConstraints={{ right: 0, left: -width }}
          key={width}
          className="portf-container-box"
        >
          {PortfArray.map((item, index) => {
            return (
              <PortfItem
                key={index}
                item={item}
                AnimMouseHover={AnimMouseHover}
                AnimMouseOff={AnimMouseOff}
                AnimMouseOn={AnimMouseOn}
              />
            );
          })}
        </motion.div>
      </motion.section>
    </article>
  );
};
