import React from "react";

const GrayBlock = ({ highlight = false }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: highlight ? "gray" : "white",
      }}
    ></div>
  );
};
const BlackBlock = ({ highlight = false }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        background: highlight ? "gray" : "black",
      }}
    ></div>
  );
};
export { GrayBlock, BlackBlock };
