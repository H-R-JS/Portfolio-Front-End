import React, { useEffect } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export const ToDoList = () => {
  //function input
  var todos = [];
  var todosLocaleStorage = localStorage.getItem("todos")?.toString();
  var index = 0;

  function inputCheck() {
    let valueInput = document.querySelector(".input-todo")?.value;
    //let value = valueInput;
    createElementTodo(valueInput);
    addStorage(valueInput);
  }

  function createElementTodo(value) {
    // create element
    let sectionTodo = document.querySelector(".section-to-do");
    let li = document.createElement("li");
    let p = document.createElement("p");
    // btns todo
    let trash = document.createElement("span");
    let modif = document.createElement("span");
    // classlist
    trash.classList.add("trash-to-do");
    modif.classList.add("modif-to-do");
    li.classList.add("to-do");
    p.classList.add("drag-item");
    //set element
    p.innerHTML = value;
    li.setAttribute("data-index", (index += 1));
    p.setAttribute("draggable", "true");
    li.append(p);
    li.append(modif);
    li.append(trash);
    sectionTodo.append(li);
    //btns function
    createTrash(trash);
    createModif(modif);
    console.log(li.getAttribute("data-index"));
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

  // function trash and modif
  function createModif(element) {
    element.addEventListener("click", (e) => {
      let targetDiv = e.target.parentNode;
      let inputModif = document.createElement("input");
      let pTodo = document.createElement("p");
      console.log(todos);
      inputModif.classList.add("modif-input");
      if (targetDiv.childNodes[0] === document.querySelector(".modif-input")) {
        // add p and remove input
        // addStorage / add grab element and section Do
        console.log(document.querySelector(".modif-input")?.value);
        pTodo.innerHTML = document.querySelector(".modif-input")?.value;
        addStorage(document.querySelector(".modif-input")?.value);
        targetDiv.removeChild(targetDiv.childNodes[0]);
        targetDiv.prepend(pTodo);
      } else {
        // add input and remove p
        inputModif.value = targetDiv.textContent;
        todos = todos.filter((t) => t !== targetDiv.textContent);
        localStorage.setItem("todos", JSON.stringify(todos));
        targetDiv.removeChild(targetDiv.childNodes[0]);
        targetDiv.prepend(inputModif);
      }
    });
  }

  function createTrash(element) {
    element.addEventListener("click", (e) => {
      const todoTarget = e.target.parentNode.textContent;
      console.log(todoTarget);
      element.parentNode.remove();
      todos = todos.filter((t) => t !== todoTarget);
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("ooiiiu");
    });
  }

  // Events drag ans drop

  let dragIndexStart;

  function dragStart() {
    //console.log("dragStart");
    dragIndexStart = +this.closest("li").getAttribute("data-index") - 1;
    console.log(dragIndexStart);
  }

  function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
  }

  function dragEnter() {
    //console.log("dragEnter");
    this.classList.add("over");
  }

  function dragLeave() {
    // console.log("dragLeave");
    this.classList.remove("over");
  }

  function dragDrop() {
    // console.log("dragDrop");
    const dragIndexEnd = +this.getAttribute("data-index") - 1;
    console.log(dragIndexEnd);
    this.classList.remove("over");
    swapItems(dragIndexStart, dragIndexEnd);
  }

  function swapItems(fromIndex, toIndex) {
    const itemOne = todos[fromIndex];
    const itemTwo = todos[toIndex];
    console.log(itemOne, itemTwo);
    console.log(todos[fromIndex]);
    todos[fromIndex] = itemTwo;
    todos[toIndex] = itemOne;
    console.log(todos);
  }

  function addEventListeners() {
    const ItemDrag = document.querySelectorAll(".to-do p");
    const ListDrag = document.querySelectorAll(".to-do");

    ItemDrag.forEach((ItemDrag) => {
      ItemDrag.addEventListener("dragstart", dragStart);
    });

    ListDrag.forEach((ListDrag) => {
      ListDrag.addEventListener("dragover", dragOver);
      ListDrag.addEventListener("drop", dragDrop);
      ListDrag.addEventListener("dragenter", dragEnter);
      ListDrag.addEventListener("dragleave", dragLeave);
    });
  }

  useEffect(() => {
    if (document.readyState !== "loading") {
      if (localStorage.getItem("todos") === null) {
        return (todos = []);
      } else {
        todos = JSON.parse(todosLocaleStorage);
        todos.forEach((todo) => {
          createElementTodo(todo);
        });
      }
      addEventListeners();
    }
  });

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
      <ul className="section-to-do"></ul>
    </main>
  );
};
