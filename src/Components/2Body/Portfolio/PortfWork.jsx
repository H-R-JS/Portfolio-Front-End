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
    const calculateWidth = () => {
      if (refPortf.current) {
        const fullWidth = refPortf.current.scrollWidth;
        const visibleWidth = refPortf.current.offsetWidth;
        const maxScroll = Math.max(0, fullWidth - visibleWidth);
        setWidth(maxScroll);
      }
    };

    // Appelé dès que le DOM est prêt (après tous les éléments visibles)
    requestAnimationFrame(calculateWidth);

    // Recalcul au resize
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
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
          dragConstraints={{ right: 0, left: width ? -width : 0 }}
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
