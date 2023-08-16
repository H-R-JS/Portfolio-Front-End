import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export const ToDoList = () => {
  //function input
  let todos = [];

  if (localStorage.getItem("todos") === null) {
    return (todos = []);
  } else {
    todos.forEach((todo) => {
      createElementTodo(todo);
    });
  }
  console.log(localStorage.getItem("todos").toString);

  function inputCheck() {
    let valueInput = document.querySelector(".input-todo")?.value;
    //let value = valueInput;
    createElementTodo(valueInput);
    addStorage(valueInput);
  }

  function createElementTodo(value) {
    // create element
    let sectionTodo = document.querySelector(".section-to-do");
    let div = document.createElement("div");
    let p = document.createElement("p");
    // btns todo
    let trash = document.createElement("span");
    let modif = document.createElement("span");
    trash.classList.add("trash-to-do");
    modif.classList.add("modif-to-do");
    div.classList.add("to-do");

    p.innerHTML = value;
    div.append(p);
    div.append(modif);
    div.append(trash);

    sectionTodo.append(div);
    createTrash(trash);
    createModif(modif);
  }

  function inputTrash(clas) {
    document.querySelector(clas).value = "";
  }
  // function set and get localeStorage
  function addStorage(todo) {
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  /*function getStorage(element) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach((todo) => {
      element.innerHTML = todo;
    });
  }*/

  // function trash and modif
  function createModif(element) {
    element.addEventListener("click", (e) => {
      let targetDiv = e.target.parentNode;
      let inputModif = document.createElement("input");
      inputModif.classList.add("modif-input");
      if (targetDiv.childNodes[0] === document.querySelector(".modif-input")) {
        // add p and remove input
        let pTodo = document.createElement("p");
        pTodo.innerHTML = document.querySelector(".modif-input")?.value;
        targetDiv.removeChild(targetDiv.childNodes[0]);
        targetDiv.prepend(pTodo);
      } else {
        // add input and remove p
        inputModif.value = targetDiv.textContent;
        targetDiv.removeChild(targetDiv.childNodes[0]);
        targetDiv.prepend(inputModif);
      }
    });
  }

  function createTrash(element) {
    element.addEventListener("click", () => {
      element.parentNode.remove();
    });
  }

  //localStorage.clear();
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
