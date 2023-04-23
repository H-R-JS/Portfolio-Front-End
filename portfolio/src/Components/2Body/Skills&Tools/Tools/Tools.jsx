import React from "react";

import { ToolsArray } from "./ToolsArray";

export const Tools = () => {
  return (
    <div className="tools-section">
      <h2>Outils</h2>
      <div className="tools-container">
        {ToolsArray.map((item, index) => {
          console.log(item);
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item})` }}
              className="tools-img"
            />
          );
        })}
      </div>
    </div>
  );
};
