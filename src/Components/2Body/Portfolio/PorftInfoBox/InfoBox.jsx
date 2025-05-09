import React from "react";

export const InfosBox = ({ infos }) => {
  return (
    <ul className="info-box">
      {infos.map((info, index) => {
        return <li key={index}>{info}</li>;
      })}
    </ul>
  );
};
