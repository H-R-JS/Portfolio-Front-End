import React, { useState, createContext } from "react";
import "./SASS/Header.scss";
import { Body } from "./Components/2Body/BodyRouter";
import { AnimCursor } from "./Components/OutPage/AnimCursor";
import { HeaderParam } from "./Components/1Header&Param/Header-Param";

const ThemeContext = createContext(null);

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const appVariant = () => setCursorVariant("app");
  const bodyVariant = () => setCursorVariant("body");
  const textVariant = () => setCursorVariant("text");
  const imgVariant = () => setCursorVariant("img");

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div
        className="App"
        onMouseEnter={appVariant}
        onMouseLeave={bodyVariant}
        id={theme}
      >
        <AnimCursor
          cursorVariant={cursorVariant}
          setCursorVariant={setCursorVariant}
        />
        <div
          className="header-folder"
          onMouseEnter={bodyVariant}
          onMouseLeave={appVariant}
        >
          <span>
            Dossier n°175-40
            <br />
            Sujet 027 Z18
          </span>
        </div>
        <HeaderParam
          {...{
            appVariant,
            bodyVariant,
            textVariant,
            toggleTheme,
            theme,
          }}
        />
        <Body {...{ appVariant, bodyVariant, textVariant, imgVariant }} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
