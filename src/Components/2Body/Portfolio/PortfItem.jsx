import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InfosBox } from "./PorftInfoBox/InfoBox";

export const PortfItem = ({
  item,
  AnimMouseHover,
  AnimMouseOff,
  AnimMouseOn,
}) => {
  const [showDesc, setShowDesc] = useState("more");

  function toggleDesc() {
    if (showDesc === "less") {
      setShowDesc("more");
    } else {
      setShowDesc("less");
    }
  }

  return (
    <div
      className="portf-box"
      onMouseEnter={() => AnimMouseHover()}
      onMouseLeave={() => AnimMouseOff()}
    >
      <div
        className={item.class}
        style={{ backgroundImage: `url(${item.img})` }}
      />
      <InfosBox infos={item.infos} />
      <div className="portf-box-text">
        <h3 className="box-h3">{item.title}</h3>
        <p>{item.text}</p>
        <div className={`description ${showDesc}`}>
          <p>{item.description}</p>
        </div>
        <span
          className="more-details"
          onClick={toggleDesc}
          onMouseEnter={() => AnimMouseOn()}
          onMouseLeave={() => AnimMouseHover()}
        >
          {showDesc.charAt(0).toUpperCase() + showDesc.slice(1)} details
        </span>
        <a
          href={item.path}
          onClick={(e) => e.preventDefault()}
          className="link-web"
          onMouseEnter={() => AnimMouseOn()}
          onMouseLeave={() => AnimMouseHover()}
        >
          Link to website
        </a>
      </div>
    </div>
  );
};
