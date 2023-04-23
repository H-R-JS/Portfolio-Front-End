import React from "react";
import { NavItems } from "./NavItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="ul-menu">
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="background-li" />
              <Link to={item.path} className="link-menu">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
