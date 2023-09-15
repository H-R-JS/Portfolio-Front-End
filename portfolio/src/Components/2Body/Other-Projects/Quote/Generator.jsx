import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

export const Generator = () => {
  const [background, setBackground] = useState({
    boxShadow:
      "950px 2px 1000px inset rgb(8, 170, 92), -1050px -2px 1000px inset rgb(146, 36, 193) ",
  });
  const [btnColor, setBtnColor] = useState({
    background:
      "linear-gradient(to right, rgb(146, 36, 193) 35%, rgb(8, 170, 92) 50%)",
  });

  const quotes = [
    [
      "Le monde nous accueille, la vie nous détruit.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset rgb(8, 170, 92), -1050px -2px 1000px inset rgb(146, 36, 193) ",
      },
      {
        boxShadow:
          "160px 0px 20px inset rgb(8, 170, 92), -160px 0px 20px inset rgb(146, 36, 193) ",
      },
    ],
    [
      "Regarde les abysses trop longtemps, elle te regarderonts aussi.",
      "Friedrich Nietzsche",
      {
        boxShadow:
          "950px 2px 1000px inset #A9A9A9, -1050px -2px 1000px inset #FF7F50 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #A9A9A9, -160px 0px 20pxinset #FF7F50 ",
      },
    ],
    [
      "L'humanité est condamné, car elle ne pardonnera jamais ses propes méfaits.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #E1AD01, -1050px -2px 1000px inset #000000 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #E1AD01, -160px 0px 20px inset #000000 ",
      },
    ],
    [
      "Les désirs sont les pressentiments des possibilités qui sont en nous.",
      "Ghoete",
      {
        boxShadow:
          "950px 2px 1000px inset #fd6c9e, -1050px -2px 1000px inset #322514 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #fd6c9e, -160px 0px 20px inset #322514 ",
      },
    ],
    [
      "Nous nous battons en duel, pourtant nous savons que nous nous battons que conte-soi même.",
      "Furi",
      {
        boxShadow:
          "950px 2px 1000px inset #EF9B0F, -1050px -2px 1000px inset #FF4500  ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #EF9B0F, -160px 0px 20px inset #FF4500  ",
      },
    ],
    [
      "Si le corps est une entrave, alors la haine est la chaîne la plus robuste.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #79cbb8, -1050px -2px 1000px inset #500472 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #79cbb8, -160px 0px 20px inset #500472 ",
      },
    ],
    [
      "La fin de l'humanité, ne sera que l'humain confronté à ses propres actes.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #d9a5b3, -1050px -2px 1000px inset #c6d7eb ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #d9a5b3, -160px 0px 20px inset #c6d7eb ",
      },
    ],
    [
      "La seule est grande vérité réside en nous, le plus triste, est que peu de personne la trouve avant la mort.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #7a2048, -1050px -2px 1000px inset #1e2761 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #7a2048, -160px 0px 20px inset #1e2761 ",
      },
    ],
    [
      "On peut gagné une vengeance, avec l'obligation de nous perdre en chemin.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #1d3c45, -1050px -2px 1000px inset #d2601a ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #1d3c45, -160px 0px 20px inset #d2601a ",
      },
    ],
    [
      "Donnez une arme à un homme, il pillera une banque, donnez une banque à un homme, il piellera le monde.",
      "Mr Robot",
      {
        boxShadow:
          "950px 2px 1000px inset #aed6dc, -1050px -2px 1000px inset #ff9a8d ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #aed6dc, -160px 0px 20px inset #ff9a8d ",
      },
    ],
    [
      "L'essentiel des choses, devrait être sans cesse l'objectif à nos yeux.",
      "Moi",
      {
        boxShadow:
          "950px 2px 1000px inset #1b6535, -1050px -2px 1000px inset #e1dd72 ",
      },
      {
        boxShadow:
          "160px 0px 20px inset #1b6535, -160px 0px 20px inset #e1dd72 ",
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
          <span className="btn-text click">Click me</span>
          <span className="btn-text gener">Générer une citation</span>
        </button>
      </article>
    </section>
  );
};
