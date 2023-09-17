import React, { Component } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      classIndex: [],
      classItem: "to-do",
      todos: [],
    };
    this.onChange = this.onChange.bind(this);
    this.trashItem = this.trashItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.setStateSynchrone = this.setStateSynchrone.bind(this);
    this.addStorage = this.addStorage.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  setStateSynchrone(stateUpdate) {
    return new Promise((resolve) => {
      this.setState(stateUpdate, () => resolve());
    });
  }

  async onChange(e) {
    await this.setStateSynchrone({ userInput: e.target.value });
  }

  async inputAdd(e) {
    e.preventDefault();
    this.addStorage(this.state.userInput);
    this.renderTodos(this.state.todos);
    await this.setStateSynchrone({
      userInput: "",
    });
  }

  inputTrash(e) {
    e.preventDefault();
    this.setState({
      userInput: "",
    });
  }

  async trashItem(e) {
    const parentTarget = e.target.parentNode;
    const indexTarget = e.target.parentNode.getAttribute("data-index");
    const dataElementArray = this.state.todos;
    const dataIndexArray = this.state.classIndex;
    const dataElementFilter = dataElementArray.filter(
      (i) => i !== parentTarget.innerText
    );
    const dataIndexFilter = dataIndexArray.filter((i) => i !== indexTarget);
    /* const dataIndexStorage = dataIndexFilter.filter(
      (i) => i <= dataIndexFilter.length
    );*/

    localStorage.setItem("todos", JSON.stringify(dataElementFilter));
    localStorage.setItem("class", JSON.stringify(dataIndexFilter));
    await this.setStateSynchrone({
      todos: dataElementFilter,
      classIndex: dataIndexFilter,
    });
    // console.log(dataIndexFilter);
    //console.log(this.state.classIndex);
    //console.log(this.state.todos);

    for (let i = 0; i < this.state.todos.length; i++) {
      let childElement = document.querySelector(".section-to-do").childNodes;
      // console.log(childElement[i].getAttribute("data-index"));
    }

    // take todos className and in sert in classIndex and localstorage
  }

  doneItem(e) {
    if (e.target.parentNode.className == "to-do done") {
      return null;
    } else {
      const itemElement = e.target.parentNode;
      itemElement.classList.add("done");
      const dataIndex = itemElement.getAttribute("data-index");
      this.addStorageIndex(dataIndex);
    }
  }

  async addStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    await this.setStateSynchrone({
      todos: [...this.state.todos, this.state.userInput],
    });
  }

  async addStorageIndex(index) {
    let classIndex;
    if (localStorage.getItem("class") === null) {
      classIndex = [];
    } else {
      classIndex = JSON.parse(localStorage.getItem("class"));
    }
    classIndex.push(index);
    localStorage.setItem("class", JSON.stringify(classIndex));

    await this.setStateSynchrone({
      classIndex: [...this.state.classIndex, index],
    });
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
    }
    //localStorage.clear();
  }

  async getClass() {
    if (localStorage.getItem("class") === null) {
      await this.setStateSynchrone({
        classIndex: [],
      });
    } else {
      await this.setStateSynchrone({
        classIndex: JSON.parse(localStorage.getItem("class")),
      });
    }
    //console.log(this.state.classIndex);
  }

  renderTodos(stateTodos) {
    return stateTodos?.map((item, index) => {
      if (this.state.classIndex.includes(`${index + 1}`)) {
        return (
          <li key={index} data-index={index + 1} className="to-do done">
            <p>{item}</p>
            <img
              src={require("./ImgTodo/done.png")}
              className="done-to-do"
              onClick={this.doneItem}
            />
            <img
              src={require("./ImgTodo/trash.png")}
              onClick={this.trashItem}
              className="trash-to-do"
            />
          </li>
        );
      } else {
        return (
          <li key={index} data-index={index + 1} className="to-do">
            <p>{item}</p>
            <img
              src={require("./ImgTodo/done.png")}
              className="done-to-do"
              onClick={this.doneItem}
            />
            <img
              src={require("./ImgTodo/trash.png")}
              onClick={this.trashItem}
              className="trash-to-do"
            />
          </li>
        );
      }
    });
  }

  componentDidMount() {
    this.getTodos();
    this.getClass();
    this.renderTodos(this.state.todos);
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
          <ul className="section-to-do">
            {this.renderTodos(this.state.todos)}
          </ul>
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
