import React, { useState } from "react";
import "./Board.css";
import LineOfBlocks from "./lineOfBlocks";
import { useSelector } from "react-redux";
import MainPiece from "./Pieces/MainPiece";
const Board = () => {
  const { board } = useSelector((state) => {
    return state.board;
  });
  let f = true;
  return (
    <div id="board">
      {[...Array(8)].map((_, x) => {
        f = !f;
        return <LineOfBlocks key={x} x={f} />;
      })}
      {Object.keys(board).map((key, index) => {
        if (board[key])
          return <MainPiece firstPos={key} image={board[key]} key={index} />;
      })}
    </div>
  );
};

export default Board;
