import React from "react";
import ReactDOM from "react-dom/client";
import "./SASS/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { OutArray } from "./Components/OutPage/OutArray";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="all-out-page">
      {OutArray.map((item, index) => {
        return (
          <div key={index} className="out-page" style={{ top: `${item.top}` }}>
            {item.content}
          </div>
        );
      })}
    </div>
    <App />
  </BrowserRouter>
);
