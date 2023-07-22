import React, { useState, createContext } from "react";
import "./SASS/Header.scss";
import { BodyRouter } from "./Components/2Body/BodyRouter";
import { AnimCursorContext } from "./Components/OutPage/AnimCursor";
import { Header } from "./Components/1Header&Param/Header/Header";

const ThemeContext = createContext(null);

function App() {
  /*const appVariant = () => setCursorVariant("app");
  const bodyVariant = () => setCursorVariant("body");
  const textVariant = () => setCursorVariant("text");
  const imgVariant = () => setCursorVariant("img");*/

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const [slide, setSlide] = useState("left");

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" style={{ backgroundPosition: slide }} id={theme}>
        <AnimCursorContext>
          <Header />
          <BodyRouter />
        </AnimCursorContext>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
