import React, { useState, useContext } from "react";
import "./SASS/Header.scss";
import { Body } from "./Components/2Body/BodyRouter";
import { AnimCursor } from "./Components/OutPage/AnimCursor";
import { HeaderParam } from "./Components/1Header&Param/Header-Param";
import { theme } from "./Components/Context";

const ThemeContext = React.createContext(theme);

export function ThemeText({ children, appVariant, bodyVariant }) {
  const value = useContext(ThemeContext);
  return (
    <div
      style={value}
      className="h-text-2"
      onMouseEnter={bodyVariant}
      onMouseLeave={appVariant}
    >
      {children}
    </div>
  );
}

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const appVariant = () => setCursorVariant("app");
  const bodyVariant = () => setCursorVariant("body");
  const textVariant = () => setCursorVariant("text");
  const imgVariant = () => setCursorVariant("img");

  const [themeSwitch, setThemeSwitch] = useState(true);
  console.log(themeSwitch);

  return (
    <ThemeContext.Provider value={theme.black}>
      <div className="App" onMouseEnter={appVariant} onMouseLeave={bodyVariant}>
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
            setThemeSwitch,
            themeSwitch,
          }}
        />
        <Body {...{ appVariant, bodyVariant, textVariant, imgVariant }} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
