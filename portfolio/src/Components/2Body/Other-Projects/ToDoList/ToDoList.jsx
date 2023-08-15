import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export const ToDoList = () => {
  //function input

  function inputTrash(clas) {
    document.querySelector(clas).value = "";
  }

  function inputCheck() {
    // create element
    let valueInput = document.querySelector(".input-todo")?.value;
    let value = valueInput;
    let sectionTodo = document.querySelector(".section-to-do");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let trash = document.createElement("span");
    let modif = document.createElement("span");
    // config element
    div.classList.add("to-do");
    p.innerHTML = value;
    trash.classList.add("trash-to-do");
    modif.classList.add("modif-to-do");
    // add element in parent
    div.append(p);
    div.append(modif);
    div.append(trash);
    sectionTodo.append(div);
    // add event todo
    trash.addEventListener("click", () => {
      div.remove();
    });
    modif.addEventListener("click", (e) => {
      let targetDiv = e.target.parentNode;
      let inputModif = document.createElement("input");
      inputModif.classList.add("modif-input");
      if (targetDiv.childNodes[0] == document.querySelector(".modif-input")) {
        // add p and remove input
        let pTodo = document.createElement("p");
        pTodo.innerHTML = document.querySelector(".modif-input")?.value;
        targetDiv.removeChild(targetDiv.childNodes[0]);
        targetDiv.prepend(pTodo);
      } else {
        // add input and remove p
        inputModif.value = targetDiv.textContent;
        console.log(targetDiv.removeChild(targetDiv.childNodes[0]));
        targetDiv.prepend(inputModif);
      }
    });
  }

  return (
    <main className="to-do-list">
      <h1>TO DO LIST</h1>
      <form className="input-container">
        <input type="text" className="input-todo" />
        <FaCheck onClick={inputCheck} className="check-todo" />
        <FaTrash
          onClick={() => inputTrash(".input-todo")}
          className="trash-todo"
        />
      </form>
      <section className="section-to-do"></section>
    </main>
  );
};
