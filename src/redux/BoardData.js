import { createSlice } from "@reduxjs/toolkit";
import { funcs } from "../functions/getPosition";
import Rules from "../functions/Rules";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: {
      f0: { type: "Bishop", player: 1 },
      c0: { type: "Bishop", player: 1 },
      b0: { type: "Knight", player: 1 },
      g0: { type: "Knight", player: 1 },
      a0: { type: "Rook", player: 1 },
      h0: { type: "Rook", player: 1 },
      e0: { type: "King", player: 1 },
      d0: { type: "Queen", player: 1 },
      a1: { type: "Pawn", player: 1 },
      b1: { type: "Pawn", player: 1 },
      c1: { type: "Pawn", player: 1 },
      d1: { type: "Pawn", player: 1 },
      e1: { type: "Pawn", player: 1 },
      f1: { type: "Pawn", player: 1 },
      g1: { type: "Pawn", player: 1 },
      h1: { type: "Pawn", player: 1 },
    },
    board2: {
      f7: { type: "Bishop", player: 2 },
      c7: { type: "Bishop", player: 2 },
      b7: { type: "Knight", player: 2 },
      g7: { type: "Knight", player: 2 },
      a7: { type: "Rook", player: 2 },
      h7: { type: "Rook", player: 2 },
      e7: { type: "King", player: 2 },
      d7: { type: "Queen", player: 2 },
      a6: { type: "Pawn", player: 2 },
      b6: { type: "Pawn", player: 2 },
      c6: { type: "Pawn", player: 2 },
      d6: { type: "Pawn", player: 2 },
      e6: { type: "Pawn", player: 2 },
      f6: { type: "Pawn", player: 2 },
      g6: { type: "Pawn", player: 2 },
      h6: { type: "Pawn", player: 2 },
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
        console.log("wrong move");
      } else {
        if (
          Rules.walk[state.board[from.x + from.y].type](
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
