import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="1, 1, 1"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
      innerStyle={{
        backgroundColor: "var(--cursor-color)",
      }}
    />
  );
};
