import React from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-scroll";
import { RevealFadeHeader } from "../Motion/Fade";

export const Navbar = () => {
  return (
    <nav>
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="background-li" />
              <RevealFadeHeader>
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  className="link-menu"
                >
                  {item.title}
                </Link>
              </RevealFadeHeader>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
