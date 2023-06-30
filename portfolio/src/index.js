import React from "react";
import ReactDOM from "react-dom/client";
import "./SASS/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { OutArray } from "./Components/OutPage/OutArray";
import { CV } from "./Components/2Body/Skills&Tools/Tools/CV/CV";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// <CV />
