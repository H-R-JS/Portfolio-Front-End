import React from "react";

import { ToolsArray } from "./ToolsArray";

export const Tools = ({ theme }) => {
  return (
    <div className="tools-section">
      <h2>Outils</h2>
      <div className="tools-container">
        {ToolsArray.map((item, index) => {
          return (
            <div className="tools-background" id={theme}>
              <div
                key={index}
                style={{ backgroundImage: `url(${item})` }}
                className="tools-img"
                id={theme}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
