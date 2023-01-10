import { createSlice } from "@reduxjs/toolkit";
import getPosition from "../functions/getPosition";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: { a1: "Bishop" },
  },
  reducers: {
    movePiece: (state, { payload: { from, to } }) => {
      to = getPosition.convertNumToPos(to);
      from = getPosition.convertNumToPos(from);
      if (!state.board.hasOwnProperty(from.x + from.y)) {
        return new Error("wdawd");
      }
      state.board[to.x + to.y] = state.board[from.x + from.y];
      delete state.board[from.x + from.y];
    },
  },
});

export const { movePiece } = boardSlice.actions;

export default boardSlice.reducer;
