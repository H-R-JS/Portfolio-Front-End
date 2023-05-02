import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AnimCursor = ({ cursorVariant, setCursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    body: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#a00e0e",
      mixBlendMode: "difference",
    },
    app: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#111",
    },

    text: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#a00e0e",
      mixBlendMode: "difference",
    },

    img: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#fff",
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      key={"setuplayout_motion"}
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
};
