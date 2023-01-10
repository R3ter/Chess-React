const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default {
  convertNumToPos: ({ x, y }) => {
    return { x: alpha[x / 100], y: y / 100 };
  },
  convertPosToNum: (pos) => {
    return { x: alpha.indexOf(pos[0]) * 100, y: parseInt(pos[1]) * 100 };
  },
};
