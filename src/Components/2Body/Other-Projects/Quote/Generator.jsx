import { CursorStyle } from "../../../OutPage/AnimCursor";
import React, { useEffect, useState } from "react";
import { Quotes as quotes } from "./quotes.js";

export const Generator = () => {
  const { AnimMouseHover, AnimMouseOff, AnimMouseOn } = CursorStyle();

  const [background, setBackground] = useState({
    backgroundColor: "#14b55a",
  });
  const [btnColor, setBtnColor] = useState({
    backgroundColor: "#b85811",
  });

  let quote = "Générez une citation";
  let author = "Appuyez sur le bouton";
  /*let backgroundQuotes = {
    boxShadow:
      "950px 2px 1000px inset rgb(8, 170, 92), -1050px -2px 1000px inset rgb(146, 36, 193) ",
  };*/
  let random = 0;

  function generatorNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generatorQuotes() {
    const textQuote = document.querySelector(".text-quote");
    const textAuthor = document.querySelector(".text-author");
    textQuote.classList.add("opacity-none");
    textAuthor.classList.add("opacity-none");
    setTimeout(() => {
      random = generatorNumber(quotes.length);
      quote = quotes[random][0];
      author = quotes[random][1];
      textQuote.innerHTML = '" ' + quote + ' "';
      textAuthor.innerHTML = "- " + author;
      textQuote.classList.remove("opacity-none");
      textAuthor.classList.remove("opacity-none");
      setBackground(quotes[random][2]);
      setBtnColor(quotes[random][3]);
    }, 500);
  }

  useEffect(() => {
    const section = document.querySelector(".generator-quotes");
    const box = document.querySelector(".box-quotes");
    const textQuote = document.querySelector(".text-quote");
    const author = document.querySelector(".text-author");
    const btn = document.querySelector(".btn-generator");

    // animation 3d
    section.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    // animation mouse in
    section.addEventListener("mouseenter", () => {
      box.style.transition = "none";
      textQuote.style.transform = "translateZ(50px)";
      author.style.transform = "translateZ(50px)";
      btn.style.transform = "translateZ(50px)";
    });
    // animation mouse out
    section.addEventListener("mouseleave", () => {
      box.style.transition = "all 0.5s ease";
      box.style.transform = `rotateY(0deg) rotateX(0deg)`;
      textQuote.style.transform = "translateZ(0px)";
      author.style.transform = "translateZ(0px)";
      btn.style.transform = "translateZ(0px)";
    });
  });

  return (
    <section
      className="generator-quotes"
      style={background}
      onMouseEnter={AnimMouseHover}
      onMouseLeave={AnimMouseOff}
    >
      <article className="box-quotes">
        <p className="text-quote">{quote}</p>
        <p className="text-author">{author}</p>
        <button
          className="btn-generator"
          onClick={generatorQuotes}
          style={btnColor}
          onMouseEnter={AnimMouseOn}
          onMouseLeave={AnimMouseHover}
        >
          <span className="btn-text click">Cliquez</span>
          <span className="btn-text gener">Générer une citation</span>
        </button>
      </article>
    </section>
  );
};
