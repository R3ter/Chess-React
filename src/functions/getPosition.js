const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const funcs = {
  convertNumToPos: ({ x, y }) => {
    if (y >= 800 || y < 0) return { y: undefined, x: undefined };
    return { x: alpha[x / 100], y: y / 100 };
  },
  convertPosToNum: (pos) => {
    return { x: alpha.indexOf(pos[0]) * 100, y: parseInt(pos[1]) * 100 };
  },
  checkIfValidPos: ({ x, y }) => {
    return (
      x == undefined ||
      (y == undefined || (x + "" + (y + "")).length) != 2 ||
      !isNaN(x) ||
      isNaN(y)
    );
  },
  getBlockState: (x, y, board) => {
    const pos = funcs.convertNumToPos({ x, y });
    if (x > 800 || x < 0 || y > 800 || y < 0) return false;
    return board[pos.x + pos.y] == undefined;
  },
};
