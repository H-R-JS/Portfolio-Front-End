import React from "react";
import { Link } from "react-router-dom";

export const OtherProjects = () => {
  const projects = [
    {
      to: "/todo",
      src: require("./imgOtherP/todolist.png"),
      className: "link-project one",
      title: "To do List",
    },
    {
      to: "/quotes",
      src: require("./ToDoList/ImgTodo/done.png"),
      className: "link-project two",
    },
  ];
  return (
    <main className="main-project">
      <section className="container-project">
        {projects.map((item, index) => {
          return (
            <Link to={item.to} key={index} className={item.className}>
              <img src={item.src} className="img-project" />
              <h2>{item.title}</h2>
            </Link>
          );
        })}
      </section>
    </main>
  );
};
