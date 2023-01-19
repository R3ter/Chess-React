import { createSlice } from "@reduxjs/toolkit";
import { funcs } from "../functions/getPosition";
import Rules from "../functions/Rules";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: {
      f0: "Bishop",
      c0: "Bishop",
      b0: "Knight",
      g0: "Knight",
      a0: "Rook",
      h0: "Rook",
      e0: "King",
      d0: "Queen",
      a1: "Pawn",
      b1: "Pawn",
      c1: "Pawn",
      d1: "Pawn",
      e1: "Pawn",
      f1: "Pawn",
      g1: "Pawn",
      h1: "Pawn",
    },
    board2: {
      f7: "Bishop",
      c7: "Bishop",
      b7: "Knight",
      g7: "Knight",
      a7: "Rook",
      h7: "Rook",
      e7: "King",
      d7: "Queen",
      a6: "Pawn",
      b6: "Pawn",
      c6: "Pawn",
      d6: "Pawn",
      e6: "Pawn",
      f6: "Pawn",
      g6: "Pawn",
      h6: "Pawn",
    },
    Highlighted: [],
    Turn: "White",
  },
  reducers: {
    setHighlighted: (state, { payload }) => {
      console.log(payload);
      state.Highlighted = payload;
    },
    movePiece: (state, { payload: { from, to, pass, rej } }) => {
      to = funcs.convertNumToPos({ x: to.x, y: to.y });
      from = funcs.convertNumToPos({ x: from.x, y: from.y });
      if (
        state.board[to.x + to.y] != undefined ||
        funcs.checkIfValidPos(to) ||
        (from.x == to.x && from.y == to.y)
      ) {
        rej();
        console.log("wrong");
      } else {
        if (
          Rules.walk[state.board[from.x + from.y]](
            from.x,
            from.y,
            state.board
          ).includes(to.x + to.y)
        ) {
          state.board[to.x + to.y] = state.board[from.x + from.y];
          state.board[from.x + from.y] = undefined;
          pass();
        } else {
          rej();
        }
      }
    },
  },
});

export const { movePiece, setHighlighted } = boardSlice.actions;

export default boardSlice.reducer;
