import React, { useState, useRef, useEffect } from "react";
import { PortfArray } from "./PortfArray";
import { motion, useMotionValue } from "framer-motion";
import { CursorStyle } from "../../OutPage/AnimCursor";
import { PortfItem } from "./PortfItem";

export const PortfWork = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const containerRef = useRef(); // <- Conteneur visible
  const dragRef = useRef(); // <- Élément scrollable/draggable
  const x = useMotionValue(0);

  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Détecte mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcule la largeur scrollable
  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current || !dragRef.current) return;
      const fullWidth = dragRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      const scrollDistance = fullWidth - visibleWidth;
      setWidth(scrollDistance > 0 ? scrollDistance : 0);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Support tactile pour mobile
  let touchStartX = 0;
  let lastX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    lastX = x.get();
  };

  const handleTouchMove = (e) => {
    const delta = e.touches[0].clientX - touchStartX;
    let next = lastX + delta;
    if (next > 0) next = 0;
    if (next < -width) next = -width;
    x.set(next);
  };

  const variFade = {
    hidden: { opacity: 0, display: "flex", x: -500 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5 } },
  };

  return (
    <article ref={containerRef} className="portf-section">
      <motion.section variants={variFade} initial="hidden" animate="show">
        <motion.div
          ref={dragRef}
          className="portf-container-box"
          style={{ x }}
          {...(!isMobile && {
            drag: "x",
            dragConstraints: { left: -width, right: 0 },
          })}
          {...(isMobile && {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
          })}
        >
          {PortfArray.map((item, index) => (
            <PortfItem
              key={index}
              item={item}
              AnimMouseHover={AnimMouseHover}
              AnimMouseOff={AnimMouseOff}
              AnimMouseOn={AnimMouseOn}
            />
          ))}
        </motion.div>
      </motion.section>
    </article>
  );
};
