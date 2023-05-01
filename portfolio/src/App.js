import React, { useState, useEffect } from "react";
import "./SASS/Header.scss";
import { Body } from "./Components/2Body/BodyRouter";
import { AnimCursor } from "./Components/OutPage/AnimCursor";
import { HeaderParam } from "./Components/1Header&Param/Header-Param";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <div
      className="App"
      onMouseEnter={() => setCursorVariant("app")}
      onMouseLeave={() => setCursorVariant("body")}
    >
      <AnimCursor
        cursorVariant={cursorVariant}
        setCursorVariant={setCursorVariant}
      />
      <div
        className="header-folder"
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("app")}
      >
        <span>
          Dossier n°175-40
          <br />
          Sujet 027 Z18
        </span>
      </div>
      <HeaderParam />
      <Body setCursorVariant={setCursorVariant} />
    </div>
  );
}

export default App;
