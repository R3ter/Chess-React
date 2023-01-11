import React, { useState } from "react";
import "./Board.css";
import LineOfBlocks from "./lineOfBlocks";
import { useSelector } from "react-redux";
import MainPiece from "./Pieces/MainPiece";
const Board = () => {
  const { board, Highlighted } = useSelector((state) => {
    return state.board;
  });
  let f = true;
  return (
    <div id="board">
      {[...Array(8)].map((_, x) => {
        f = !f;
        return <LineOfBlocks index={x} key={x} x={f} highlight={Highlighted} />;
      })}
      {Object.keys(board).map((key, index) => {
        if (board[key])
          return (
            <MainPiece
              firstPos={key}
              image={board[key]}
              board={board}
              key={index}
            />
          );
      })}
    </div>
  );
};

export default Board;
