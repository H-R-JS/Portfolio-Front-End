import React from "react";

export const ToDoNav = () => {
  var classSecToDo = ".section-to-do";
  var classSecDone = ".section-done";

  return (
    <nav>
      <button className="btn-do">To do</button>
      <button className="btn-do">Done</button>
    </nav>
  );
};
