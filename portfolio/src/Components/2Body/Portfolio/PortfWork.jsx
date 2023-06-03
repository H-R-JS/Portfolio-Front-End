import React, { useState, useRef, useEffect } from "react";
import { PortfArray } from "./PortfArray";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PortfWork = () => {
  const refPortf = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(refPortf.current.scrollWidth - refPortf.current.offsetWidth);
    console.log(refPortf.current.offsetWidth);
  }, []);

  return (
    <div ref={refPortf} className="portf-section">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="portf-container-box"
      >
        {PortfArray.map((item, index) => {
          return (
            <div key={index} className="portf-box">
              <div
                className={item.class}
                style={{ backgroundImage: `url(${item.img})` }}
              />
              {item.infoB}
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
      </motion.div>
    </div>
  );
};
