import { funcs } from "./getPosition";

export default {
  walk: {
    Pawn: (x, y, board) => {
      if (
        funcs.getBlockState(
          funcs.convertPosToNum(x + y).x,
          funcs.convertPosToNum(x + y).y + 100,
          board
        )
      )
        return [x + (y + 1)];
      return [];
    },
    Rook: (x, y, board) => {
      const moves = [];
      const originPos = funcs.convertPosToNum(x + y);
      x = originPos.x;
      y = originPos.y;
      for (let i = x + 100; i < 800; i += 100) {
        if (funcs.getBlockState(i, y, board)) {
          const pos = funcs.convertNumToPos({ x: i, y });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = x - 100; i >= 0; i -= 100) {
        if (funcs.getBlockState(i, y, board)) {
          const pos = funcs.convertNumToPos({ x: i, y });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = y - 100; i >= 0; i -= 100) {
        if (funcs.getBlockState(x, i, board)) {
          const pos = funcs.convertNumToPos({ x, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = y + 100; i < 800; i += 100) {
        if (funcs.getBlockState(x, i, board)) {
          const pos = funcs.convertNumToPos({ x, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      return moves;
    },
    Knight: (x, y, board) => {
      const moves = [];
      const originPos = funcs.convertPosToNum(x + y);
      x = originPos.x;
      y = originPos.y;
      if (funcs.getBlockState(x - 200, y - 100, board)) {
        const pos = funcs.convertNumToPos({ x: x - 200, y: y - 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x - 200, y + 100, board)) {
        const pos = funcs.convertNumToPos({ x: x - 200, y: y + 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x - 100, y + 200, board)) {
        const pos = funcs.convertNumToPos({ x: x - 100, y: y + 200 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x - 100, y - 200, board)) {
        const pos = funcs.convertNumToPos({ x: x - 100, y: y - 200 });
        moves.push(pos.x + pos.y);
      }

      if (funcs.getBlockState(x + 200, y - 100, board)) {
        const pos = funcs.convertNumToPos({ x: x + 200, y: y - 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 200, y + 100, board)) {
        const pos = funcs.convertNumToPos({ x: x + 200, y: y + 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 100, y + 200, board)) {
        const pos = funcs.convertNumToPos({ x: x + 100, y: y + 200 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 100, y - 200, board)) {
        const pos = funcs.convertNumToPos({ x: x + 100, y: y - 200 });
        moves.push(pos.x + pos.y);
      }
      return moves;
    },
    King: (x, y, board) => {
      const moves = [];
      const originPos = funcs.convertPosToNum(x + y);
      x = originPos.x;
      y = originPos.y;
      if (funcs.getBlockState(x - 100, y - 100, board)) {
        const pos = funcs.convertNumToPos({ x: x - 100, y: y - 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x - 100, y + 100, board)) {
        const pos = funcs.convertNumToPos({ x: x - 100, y: y + 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 100, y + 100, board)) {
        const pos = funcs.convertNumToPos({ x: x + 100, y: y + 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 100, y - 100, board)) {
        const pos = funcs.convertNumToPos({ x: x + 100, y: y - 100 });
        moves.push(pos.x + pos.y);
      }

      if (funcs.getBlockState(x - 100, y, board)) {
        const pos = funcs.convertNumToPos({ x: x - 100, y: y });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x + 100, y, board)) {
        const pos = funcs.convertNumToPos({ x: x + 100, y: y });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x, y + 100, board)) {
        const pos = funcs.convertNumToPos({ x: x, y: y + 100 });
        moves.push(pos.x + pos.y);
      }
      if (funcs.getBlockState(x, y - 100, board)) {
        const pos = funcs.convertNumToPos({ x: x, y: y - 100 });
        moves.push(pos.x + pos.y);
      }

      return moves;
    },
    Queen: (x, y, board) => {
      const moves = [];

      const originPos = funcs.convertPosToNum(x + y);
      x = originPos.x;
      y = originPos.y;
      //for loop with x and y moving sloping down right
      for (let i = y + 100, j = x + 100; i < 800; i += 100, j += 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping down left
      for (let i = y + 100, j = x - 100; i < 800; i += 100, j -= 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping up right
      for (let i = y - 100, j = x + 100; i >= 0; i -= 100, j += 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping up left
      for (let i = y - 100, j = x - 100; i >= 0; i -= 100, j -= 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = x + 100; i < 800; i += 100) {
        if (funcs.getBlockState(i, y, board)) {
          const pos = funcs.convertNumToPos({ x: i, y });
          moves.push(pos.x + pos.y);
        } else break;
      }

      for (let i = x - 100; i >= 0; i -= 100) {
        if (funcs.getBlockState(i, y, board)) {
          const pos = funcs.convertNumToPos({ x: i, y });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = y - 100; i >= 0; i -= 100) {
        if (funcs.getBlockState(x, i, board)) {
          const pos = funcs.convertNumToPos({ x, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      for (let i = y + 100; i < 800; i += 100) {
        if (funcs.getBlockState(x, i, board)) {
          const pos = funcs.convertNumToPos({ x, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      return moves;
    },
    Bishop: (x, y, board) => {
      const moves = [];

      const originPos = funcs.convertPosToNum(x + y);
      x = originPos.x;
      y = originPos.y;
      //for loop with x and y moving sloping down right
      for (let i = y + 100, j = x + 100; i < 800; i += 100, j += 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping down left
      for (let i = y + 100, j = x - 100; i < 800; i += 100, j -= 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping up right
      for (let i = y - 100, j = x + 100; i >= 0; i -= 100, j += 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      //for loop with x and y moving sloping up left
      for (let i = y - 100, j = x - 100; i >= 0; i -= 100, j -= 100) {
        if (funcs.getBlockState(j, i, board)) {
          const pos = funcs.convertNumToPos({ x: j, y: i });
          moves.push(pos.x + pos.y);
        } else break;
      }
      return moves;
    },
  },
};
