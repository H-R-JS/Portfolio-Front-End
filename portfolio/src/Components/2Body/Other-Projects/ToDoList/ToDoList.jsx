import React, { Component } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      items: [],
      classItem: "to-do",
      todos: [],
    };
    this.onChange = this.onChange.bind(this);
    this.setStateSynchrone = this.setStateSynchrone.bind(this);
    this.addStorage = this.addStorage.bind(this);
    this.getTodos = this.getTodos.bind(this);
    // this.renderTodos = this.renderTodos.bind(this);
  }

  setStateSynchrone(stateUpdate) {
    return new Promise((resolve) => {
      this.setState(stateUpdate, () => resolve());
    });
  }

  async onChange(e) {
    await this.setStateSynchrone({ userInput: e.target.value });
    console.log(this.state.userInput);
  }

  async inputAdd(e) {
    e.preventDefault();
    this.addStorage(this.state.userInput);
    await this.setStateSynchrone({
      items: [...this.state.items, this.state.userInput],
      userInput: "",
    });

    // insert in localstorage value and class, and change class with data-index
  }

  inputTrash(e) {
    e.preventDefault();
    this.setState({
      userInput: "",
    });
  }

  trashItem(item) {
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      items: array,
    });
  }

  doneItem(e) {
    const itemElement = e.target.parentNode;
    itemElement.classList.add("done");
  }

  async addStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      (todos = JSON.parse(localStorage.getItem("todos"))),
        console.log(this.state.todos);
    }

    /*if (localStorage.getItem("todos") === null) {
      await this.setStateSynchrone({
        todos: [...this.state.items],
      });
    } else {
      console.log("section get");
      await this.setStateSynchrone({
        todos: JSON.parse(localStorage.getItem("todos")),
      });
      console.log(this.state.todos);
    }

    // if (this.state.todos === []) {
    // console.log("fsfsefsfdqqdfzqdzqdqzdqzdqzdh");
    await this.setStateSynchrone({
      todos: [JSON.parse(localStorage.getItem("todos")), ...this.state.items],
    });
    // }*/

    console.log(this.state.todos);
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  async getTodos() {
    if (localStorage.getItem("todos") === null) {
      await this.setStateSynchrone({
        todos: [],
      });
    } else {
      await this.setStateSynchrone({
        todos: JSON.parse(localStorage.getItem("todos")),
      });
      console.log(this.state.todos);
    }
    localStorage.clear();
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <main className="to-do-list">
        <h1>TO DO LIST</h1>
        <form className="input-container">
          <input
            type="text"
            onChange={(e) => this.onChange(e)}
            value={this.state.userInput}
            className="input-todo"
          />
          <FaCheck onClick={this.inputAdd.bind(this)} className="add-todo" />
          <FaTrash
            onClick={this.inputTrash.bind(this)}
            className="trash-todo"
          />
        </form>
        <section>
          <ul className="section-to-do"></ul>
        </section>
      </main>
    );
  }
}

/**{this.state.todos.map((item, index) => {
              return (
                <li key={index} data-key={index + 1} className="to-do">
                  <p>{item}</p>
                  <img
                    src={require("./ImgTodo/done.png")}
                    className="done-to-do"
                    onClick={this.doneItem.bind(this)}
                  />
                  <img
                    src={require("./ImgTodo/trash.png")}
                    onClick={this.trashItem.bind(this, item)}
                    className="trash-to-do"
                  />
                </li>
              );
            })} */

//

/**let dragIndexStart;

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
 */

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

/*<nav>
        <button className="btn-do" onClick={displayTodos}>
          To do
        </button>
        <button className="btn-do" onClick={displayDone}>
          Done
        </button>
      </nav>*/
