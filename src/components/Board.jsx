import React from "react";
import "./Board.css";
import LineOfBlocks from "./lineOfBlocks";
import SetPieces from "./setPieces";

const Board = () => {
  let f = true;
  let { obj, GridValues } = SetPieces();
  return (
    <div id="board">
      {[...Array(8)].map((_, x) => {
        f = !f;
        return <LineOfBlocks key={x} x={f} />;
      })}
      {obj.map(({ class: Component, positions }) =>
        positions.map((pos) => {
          GridValues = { ...GridValues, key: { pos, Component } };
          return <Component GridValues={GridValues} position={pos} />;
        })
      )}
    </div>
  );
};

export default Board;
