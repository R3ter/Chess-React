import React from "react";
import "./Board.css";
import LineOfBlocks from "./lineOfBlocks";
import { useSelector } from "react-redux";
import MainPiece from "./Pieces/MainPiece";
const Board = () => {
  const { board } = useSelector((state) => state.board);
  console.log(board);
  let f = true;
  return (
    <div id="board">
      {[...Array(8)].map((_, x) => {
        f = !f;
        return <LineOfBlocks key={x} x={f} />;
      })}
      {Object.keys(board).map((key, index) => {
        return <MainPiece firstPos={key} image={board[key]} key={index} />;
      })}
    </div>
  );
};

export default Board;
