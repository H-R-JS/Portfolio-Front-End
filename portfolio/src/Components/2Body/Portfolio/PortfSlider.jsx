import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PortfArray } from "./PortfArray";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";

export const PortfSlider = ({
  slides,
  appVariant,
  bodyVariant,
  textVariant,
  theme,
}) => {
  const controlSlide = useAnimation();
  const [show, setShow] = useState(true);
  const classSlide = !show ? "remove-slide" : "slide active";

  const slideMotion = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, staggerChildren: 0.4 },
    },
  };

  const slideChild = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setShow(false);
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setShow(true);
    }, 500);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="portf-container">
      <FaArrowAltCircleLeft
        className="arrow left"
        onClick={prevSlide}
        onMouseEnter={bodyVariant}
        onMouseLeave={appVariant}
      />
      <Tilt perspective={1200} className="portf-container-box" id={theme}>
        <h2>Portfolio</h2>
        {PortfArray.map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? classSlide : "slide"}
            >
              {index === current && (
                <motion.div
                  variants={slideMotion}
                  initial="hidden"
                  animate="show"
                  className="portf-box"
                >
                  <motion.div
                    variants={slideChild}
                    className="portf-img"
                    style={{ backgroundImage: `url(${item.img})` }}
                    onMouseEnter={textVariant}
                    onMouseLeave={appVariant}
                  />
                  <motion.p variants={slideChild} className="portf-text">
                    <span onMouseEnter={textVariant} onMouseLeave={appVariant}>
                      {item.title}
                    </span>
                    {item.text}
                  </motion.p>
                </motion.div>
              )}
            </div>
          );
        })}
      </Tilt>

      <FaArrowAltCircleRight
        className="arrow right"
        onClick={nextSlide}
        onMouseEnter={bodyVariant}
        onMouseLeave={appVariant}
      />
    </section>
  );
};
