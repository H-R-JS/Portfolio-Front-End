import React, { useState, useEffect } from "react";
import "./SASS/Header.scss";
import { Header } from "./Components/1Head/Header";
import { Body } from "./Components/2Body/BodyRouter";
import { Params } from "./Components/OutPage/Params/Params";
import { motion, useAnimation } from "framer-motion";
import { TiCog } from "react-icons/ti";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  const controlApp = useAnimation();

  const variApp = {
    hiddenParam: {
      marginLeft: "100px",
    },
    showParam: {
      marginLeft: "-100px",
    },
  };

  useEffect(() => {
    controlApp.start("hiddenParam");
  }, []);

  return (
    <motion.div variants={variApp} animate={controlApp} className="App">
      <motion.div
        key={"setuplayout_motion"}
        className="cursor"
        variants={variants}
        animate="default"
      />

      <div className="header-folder">
        <span>
          Dossier n°175-40
          <br />
          Sujet 027 Z18
        </span>
      </div>
      <Params />
      <div>
        <Header />
        <TiCog
          className="icon-params"
          onClick={() => {
            controlApp.start("showParam");
          }}
        />
      </div>

      <Body />
    </motion.div>
  );
}

export default App;
