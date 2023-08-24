import React, { useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export const ToDoList = () => {
  //function input
  var todos = [];
  var doneToDo = [];
  var todosLocaleStorage = localStorage.getItem("todos")?.toString();
  var doneLocaleStorage = localStorage.getItem("done")?.toString();
  var index = 0;

  const elementTodos = [];
  // const sectionToDo = document.querySelector(".section-to-do");

  function inputCheck() {
    let valueInput = document.querySelector(".input-todo")?.value;
    createElementTodo(valueInput);
    addStorage(valueInput);
  }

  function createElementTodo(value) {
    const sectionToDo = document.querySelector(".section-to-do");
    const liTodo = document.createElement("li");
    liTodo.setAttribute("data-index", index);
    liTodo.setAttribute("draggable", true);
    liTodo.classList.add("to-do");
    liTodo.innerHTML = `<p>${value}</p>
      <span className="done-to-do" ></span>
      <span className="trash-to-do" ></span>
     `;
    sectionToDo.append(liTodo);
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

  function addStorageDone(todo) {
    if (localStorage.getItem("done") === null) {
      doneToDo = [];
    } else {
      doneToDo = JSON.parse(localStorage.getItem("done"));
    }
    console.log(todo);
    doneToDo.push(todo);
    localStorage.setItem("done", JSON.stringify(doneToDo));
  }

  // function trash, modif and done
  /* function createModif(element) {
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
  }*/

  const trashTodo = document.querySelector("trash-to-do");
  trashTodo?.addEventListener("click", (e) => {
    const todoTarget = e.target.parentNode.textContent;
    console.log(todoTarget);
    e.target.parentNode.remove();
    todos = todos.filter((t) => t !== todoTarget);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("ooiiiu");
  });

  function todoDone(element) {
    element.addEventListener("click", (e) => {
      let valueElement = element.parentNode.textContent;
      console.log(valueElement);
      addStorageDone(valueElement);
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

  function update() {
    if (localStorage.getItem("todos") === null) {
      return (todos = []);
    } else {
      todos = JSON.parse(todosLocaleStorage);
      todos.forEach((todo) => {
        createElementTodo(todo);
      });
    }

    if (localStorage.getItem("done") === null) {
      return (doneToDo = []);
    } else {
      doneToDo = JSON.parse(doneLocaleStorage);
      doneToDo.forEach((todo) => {
        createElementTodo(todo);
      });
    }
  }

  const [classTodos, setClassTodos] = useState(".section-todos");
  const [classDone, setClassDone] = useState(".section-done-todos");

  function displayTodos(e) {
    setClassTodos(".none");
  }

  function displayDone() {}

  useEffect(() => {
    update();
    addEventListeners();
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
      <nav>
        <button className="btn-do" onClick={displayTodos}>
          To do
        </button>
        <button className="btn-do" onClick={displayDone}>
          Done
        </button>
      </nav>
      <section className={classTodos}>
        <ul className="section-to-do"></ul>
      </section>
      <section className={classDone}>
        <ul className="section-done"></ul>
      </section>
    </main>
  );
};

//

/* let li = document.createElement("li");
    let p = document.createElement("p");
    // btns todo
    let trash = document.createElement("span");
    let done = document.createElement("span");
    // classlist
    trash.classList.add("trash-to-do");
    done.classList.add("done-to-do");
    li.classList.add("to-do");
    p.classList.add("drag-item");
    //set element
    p.innerHTML = value;
    li.setAttribute("data-index", (index += 1));
    p.setAttribute("draggable", "true");
    li.append(p);
    li.append(done);
    li.append(trash);*/
//btns function
//createTrash(trash);
// todoDone(done);
//console.log(li.getAttribute("data-index"));
