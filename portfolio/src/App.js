import React, { useState, useEffect } from "react";
import "./SASS/Header.scss";
import { Header } from "./Components/1Head/Header";
import { Body } from "./Components/2Body/BodyRouter";
import { Params } from "./Components/OutPage/Params/Params";
import { motion, useAnimation } from "framer-motion";
import { TiCog, TiArrowLeftThick } from "react-icons/ti";
import { AnimCursor } from "./Components/OutPage/AnimCursor";

function App() {
  /////
  const paramToggle = useAnimation();

  const variParam = {
    hiddenParam: {
      marginTop: "0px",
    },
    showParam: {
      marginTop: "80px",
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
  }, []);

  return (
    <div className="App">
      <AnimCursor />
      <div className="header-folder">
        <span>
          Dossier n°175-40
          <br />
          Sujet 027 Z18
        </span>
      </div>
      <div className="header-param">
        <motion.div variants={variParam} animate={paramToggle}>
          <Header />
        </motion.div>
        <div>{icon}</div>
        <Params />
      </div>

      <Body />
    </div>
  );
}

export default App;
