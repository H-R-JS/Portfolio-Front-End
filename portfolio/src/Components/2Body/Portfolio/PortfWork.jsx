import React from "react";
import { PortfArray } from "./PortfArray";
import { Link } from "react-router-dom";

export const PortfWork = () => {
  return (
    <div className="portf-container-box">
      {PortfArray.map((item, index) => {
        return (
          <div key={index} className="portf-box">
            <div
              className={item.class}
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="portf-box-text">
              <h3 className="box-h3">{item.title}</h3>
              <p>{item.text}</p>
              <Link to={item.path} className="link-web">
                Lien vers le site Web
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
