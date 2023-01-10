import { createSlice } from "@reduxjs/toolkit";
import getPosition from "../functions/getPosition";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    board: { a1: "Bishop", a2: "Bishop" },
  },
  reducers: {
    movePiece: (state, { payload: { from, to } }) => {
      to = getPosition.convertNumToPos({ x: to.x , y: to.y  });
      from = getPosition.convertNumToPos({ x: from.x , y: from.y  });
      console.log(from);
      if (!state.board.hasOwnProperty(from.x + from.y)) {
        console.log("wrong");
      } else {
        state.board[to.x + to.y] = state.board[from.x + from.y];
        delete state.board[from.x + from.y];
      }
    },
  },
});

export const { movePiece } = boardSlice.actions;

export default boardSlice.reducer;
