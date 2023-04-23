import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PortfArray } from "./PortfArray";

export const PortfSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  return (
    <section className="portf-container">
      <FaArrowAltCircleLeft className="arrow left" onClick={prevSlide} />

      <div className="portf-container-box">
        {PortfArray.map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <div className="portf-box">
                  <div
                    className="portf-img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <p className="portf-text">
                    <span>{item.title}</span>
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight className="arrow right" onClick={nextSlide} />
    </section>
  );
};
