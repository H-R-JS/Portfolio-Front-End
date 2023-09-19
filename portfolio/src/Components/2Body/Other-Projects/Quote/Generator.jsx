import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

export const Generator = () => {
  const [background, setBackground] = useState({
    backgroundColor: "#14b55a",
  });
  const [btnColor, setBtnColor] = useState({
    backgroundColor: "#b85811",
  });

  const quotes = [
    [
      "Le monde nous accueille, la vie nous détruit.",
      "Inconnu",
      {
        backgroundColor: "#9a68af",
      },
      {
        backgroundColor: "#8c8c8c",
      },
    ],
    [
      "Regarde les abysses trop longtemps, elles te regardent aussi.",
      "Friedrich Nietzsche",
      {
        backgroundColor: "#581d22",
      },
      {
        backgroundColor: "#3b3b3b ",
      },
    ],
    [
      "Danse comme si personne ne te regardait .",
      "Inconnu",
      {
        backgroundColor: "#dd4124",
      },
      {
        backgroundColor: "#02b6ff",
      },
    ],
    [
      "Les désirs sont les pressentiments des possibilités qui sont en nous.",
      "Ghoete",
      {
        backgroundColor: "#14b55a",
      },
      {
        backgroundColor: "#b85811",
      },
    ],
    [
      "Parfois, la souffrance est un moyen d'atteindre un moment de plénitude qui balaiera tout .",
      "Alice Quinn",
      {
        backgroundColor: "#e8e13a  ",
      },
      {
        backgroundColor: "#55b4cc  ",
      },
    ],
    [
      "Si le corps est une entrave, alors la haine est la chaîne la plus robuste.",
      "Inconnu",
      {
        backgroundColor: "#7bc4c4",
      },
      {
        backgroundColor: "#843b3b",
      },
    ],
    [
      "La fin de l'humanité, ne sera que l'humain confronté à ses propres actes.",
      "Inconnu",
      {
        backgroundColor: "#8c8c8c",
      },
      {
        backgroundColor: "#9a68af",
      },
    ],
    [
      "Internet est la première chose que l'homme à créée sans la comprendre c'est la plus grande expérience en matière d'anarchie jamais réalisée.",
      "Eric Schmidt",
      {
        backgroundColor: "#581d22",
      },
      {
        backgroundColor: "#3b3b3b",
      },
    ],
    [
      "Le pire des crimes, c'est de tuer le temps.",
      "Grégoire Lacroix",
      {
        backgroundColor: "#02b6ff",
      },
      {
        backgroundColor: "#dd4124",
      },
    ],
    [
      "Donnez une arme à un homme, il pillera une banque, donnez une banque à un homme, il piellera le monde.",
      "Mr Robot",
      {
        backgroundColor: "#b91428",
      },
      {
        backgroundColor: "#4c7d8e",
      },
    ],
    [
      "C'est en étant dans la lumière qu'on perçoit le côté obscur des choses",
      "Moi",
      {
        backgroundColor: "#4a494d",
      },
      {
        backgroundColor: "#008080 ",
      },
    ],
  ];

  let quote = "Générez une citation";
  let author = "Appuyez sur le bouton";
  let backgroundQuotes = {
    boxShadow:
      "950px 2px 1000px inset rgb(8, 170, 92), -1050px -2px 1000px inset rgb(146, 36, 193) ",
  };
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
      backgroundQuotes = quotes[random][2];
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
    <section className="generator-quotes" style={background}>
      <article className="box-quotes">
        <p className="text-quote">{quote}</p>
        <p className="text-author">{author}</p>
        <button
          className="btn-generator"
          onClick={generatorQuotes}
          style={btnColor}
        >
          <span className="btn-text click">Cliquez</span>
          <span className="btn-text gener">Générer une citation</span>
        </button>
      </article>
    </section>
  );
};
