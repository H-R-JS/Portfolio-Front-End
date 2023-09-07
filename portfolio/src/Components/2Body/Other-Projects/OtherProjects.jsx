import React from "react";
import { Link } from "react-router-dom";

export const OtherProjects = () => {
  const projects = [
    {
      to: "/todo",
      src: require("./imgOtherP/todolist.png"),
      classLink: "link-project one",
      classImg: "img-project one",
      classH2: "h21",
      title: "To do List",
    },
    {
      to: "/quotes",
      src: require("./imgOtherP/quotes.png"),
      classLink: "link-project two",
      classImg: "img-project two",
      classH2: "h22",
      title: "Citation",
      title2: "Generator",
    },
  ];
  return (
    <main className="main-project">
      <section className="container-project">
        {projects.map((item, index) => {
          return (
            <Link to={item.to} key={index} className={item.classLink}>
              <img src={item.src} className={item.classImg} />
              <h2 className={item.classH2}>{item.title}</h2>
              <h2 className={item.classH2}>{item.title2}</h2>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
