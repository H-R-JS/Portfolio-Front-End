import React, { useState, useEffect, useContext, createContext } from "react";
import { motion } from "framer-motion";

const AnimCursor = createContext();

export const AnimCursorContext = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("app");
  const [cursorBackVariant, setCursorBackVariant] = useState("backCur");

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    mouseOn: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "rgb(110, 159, 214)", //"#a00e0e",
      rotate: 140,
      borderRadius: 0,
      transition: { duration: 0.1 },
      //mixBlendMode: "difference",
    },
    app: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#fff", //"#111",
      borderRadius: 50,
      transition: { duration: 0.1 },
    },

    mouseHover: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#03224c", //"#111",
      borderRadius: 50,
      transition: { duration: 0.1 },
    },

    backCur: {
      height: 32,
      width: 32,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      border: "2px solid #fff",
      transition: { duration: 0.2 },
    },

    backCurHover: {
      height: 32,
      width: 32,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      border: "2px solid #03224c",
      transition: { duration: 0.2 },
    },

    backCurOn: {
      height: 32,
      width: 32,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      border: "0px solid #111",
      transition: { duration: 0.2 },
    },
  };

  function AnimMouseOn() {
    setCursorBackVariant("backCurOn");
    setCursorVariant("mouseOn");
  }

  function AnimMouseHover() {
    setCursorBackVariant("backCurHover");
    setCursorVariant("mouseHover");
  }

  function AnimMouseOff() {
    setCursorBackVariant("backCur");
    setCursorVariant("app");
  }

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
    <>
      <motion.div
        layout
        className="cursors"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-back"
        variants={variants}
        animate={cursorBackVariant}
      />

      <AnimCursor.Provider
        value={{
          cursorVariant,
          AnimMouseOn,
          AnimMouseOff,
          AnimMouseHover,
        }}
      >
        {children}
      </AnimCursor.Provider>
    </>
  );
};

export function CursorStyle() {
  return useContext(AnimCursor);
}
