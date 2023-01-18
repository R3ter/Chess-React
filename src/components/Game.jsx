import React from "react";
import Board from "./Board";

const Game = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "100px",
      }}
    >
      <Board></Board>;
    </div>
  );
};

export default Game;
