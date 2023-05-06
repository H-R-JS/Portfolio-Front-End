import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { PhoneMenu } from "./PhoneMenu/PhoneMenu";
import Media from "react-media";

export const Header = ({ appVariant, textVariant, theme }) => {
  return (
    <header id={theme}>
      <Navbar {...{ appVariant, textVariant, theme }} />
    </header>
  );
};

/**<Media query="(max-width: 800px)">
        {(matches) =>
          matches ? (
            <PhoneMenu />
          ) : (
            <Navbar {...{ appVariant, textVariant, theme }} />
          )
        }
      </Media> */
