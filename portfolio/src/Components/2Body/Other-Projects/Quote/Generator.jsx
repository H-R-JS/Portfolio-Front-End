import React from "react";

export const Generator = () => {
  const quotes = [
    ["Le monde nous accueille, la vie nous détruit.", "Moi"],
    [
      "Regarde les abysses trop longtemps, elle te regarderonts aussi.",
      "Friedrich Nietzsche",
    ],
    [
      "L'humanité est condamné, car elle ne pardonnera jamais ses propes méfaits.",
      "Moi",
    ],
    [
      "Les désirs sont les pressentiments des possibilités qui sont en nous.",
      "Ghoete",
    ],
    [
      "Nous nous battons en duel, pourtant nous savons que nous nous battons que conte-soi même.",
      "Furi",
    ],
    [
      "Si le corps est une entrave, alors la haine est la chaîne la plus robuste.",
      "Moi",
    ],
    [
      "La fin de l'humanité, ne sera que l'humain confronté à ses propres actes.",
      "Moi",
    ],
    [
      "La seule est grande vérité réside en nous, le plus triste, est que peu de personne la trouve avant la mort.",
      "Moi",
    ],
    [
      "On peut gagné une vengeance, avec l'obligation de nous perdre en chemin.",
      "Moi",
    ],
    [
      "Donnez une arme à un homme, il pillera une banque, donnez une banque à un homme, il piellera le monde.",
      "Mr Robot",
    ],
    [
      "L'essentiel des choses, devrait être sans cess l'objectif à nos yeux.",
      "Moi",
    ],
  ];

  let quote = "Générez une citation";
  let author = " Appuyez sur le bouton";
  let random = 0;

  function generatorNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function generatorQuotes() {
    const textQuote = document.querySelector(".text-quote");
    const textAuthor = document.querySelector(".text-author");
    textQuote.classList.add("slideY");
    textAuthor.classList.add("slideX");
    setTimeout(() => {
      random = generatorNumber(quotes.length);
      quote = quotes[random][0];
      author = quotes[random][1];
      textQuote.innerHTML = '" ' + quote + ' "';
      textAuthor.innerHTML = "- " + author;
      textQuote.classList.remove("slideY");
      textAuthor.classList.remove("slideX");
    }, 450);
  }

  return (
    <section className="generator-quotes">
      <article className="box-quotes">
        <p className="text-quote">{quote}</p>
        <p className="text-author">{author}</p>
      </article>
      <button className="btn-generator" onClick={generatorQuotes}>
        <span className="btn-text click">Click me</span>
        <span className="btn-text gener">Générer une citation</span>
      </button>
    </section>
  );
};
