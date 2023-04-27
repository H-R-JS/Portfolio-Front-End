import React, { useState, useEffect, useRef } from "react";
import "./SASS/Header.scss";
import { Header } from "./Components/1Head/Header";
import { Body } from "./Components/2Body/BodyRouter";
import { Params } from "./Components/OutPage/Params/Params";
import { motion, useAnimation } from "framer-motion";
import { TiCog, TiArrowLeftThick } from "react-icons/ti";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const paramToggle = useAnimation();

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },

    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const variParam = {
    hiddenParam: {
      marginLeft: "100px",
    },
    showParam: {
      marginLeft: "-100px",
    },
  };

  const IconCog = (
    <TiCog
      className="icon-params"
      onClick={() => {
        console.log("fgsfsfsf");
        paramToggle.start("showParam");
        setIcon(IconArrow);
      }}
    />
  );

  const IconArrow = (
    <TiArrowLeftThick
      className="icon-params"
      onClick={() => {
        console.log("fgsfsfsf");
        paramToggle.start("hiddenParam");
        setIcon(IconCog);
      }}
    />
  );
  const [icon, setIcon] = useState(IconCog);

  useEffect(() => {
    paramToggle.start("hiddenParam");
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
    <motion.div variants={variParam} animate={paramToggle} className="App">
      <motion.div
        key={"setuplayout_motion"}
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      <div className="header-folder">
        <span>
          Dossier n°175-40
          <br />
          Sujet 027 Z18
        </span>
      </div>
      <Params />
      <div className="header-param">
        <span
          style={{ fontWeight: 600, fontSize: "150px" }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          LOOOOOOL
        </span>
        <Header />
        <div>{icon}</div>
      </div>

      <Body />
    </motion.div>
  );
}

export default App;
