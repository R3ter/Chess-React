import { funcs } from "./getPosition";

export default {
  walk: {
    Pawn: (x, y, board) => {
      if (
        funcs.getBlockState(
          funcs.convertPosToNum(x + y).x,
          funcs.convertPosToNum(x + y).y + 1,
          board
        )
      )
        return [x + (y + 1)];
      return [];
    },
    Rook: (x, y, board) => {
      const moves = [];
      for (let i = x; i < 8; i++) {
        if (funcs.getBlockState(i * 100, y, board)) moves.push({ x, y });
        else break;
      }
      for (let i = 0; i < x; i++) {
        if (funcs.getBlockState(i * 100, y, board)) moves.push({ x, y });
        else break;
      }

      for (let i = 0; i < y; i++) {
        if (funcs.getBlockState(x, i * 100, board)) moves.push({ x, y });
        else break;
      }
      for (let i = y; i < 8; i++) {
        if (funcs.getBlockState(x, i * 100, board)) moves.push({ x, y });
        else break;
      }
      return moves;
    },
  },
};
