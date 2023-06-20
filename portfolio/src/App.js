import React, { useState, createContext } from "react";
import "./SASS/Header.scss";
import { Body, BodyRouter } from "./Components/2Body/BodyRouter";
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

  const [slide, setSlide] = useState("left");

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div
        className="App"
        onMouseEnter={appVariant}
        onMouseLeave={bodyVariant}
        style={{ backgroundPosition: slide }}
        id={theme}
      >
        <AnimCursor
          cursorVariant={cursorVariant}
          setCursorVariant={setCursorVariant}
        />

        <HeaderParam
          {...{
            appVariant,
            bodyVariant,
            textVariant,
            toggleTheme,
            theme,
          }}
        />
        <BodyRouter
          {...{
            appVariant,
            bodyVariant,
            textVariant,
            imgVariant,
            theme,
            setSlide,
          }}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
