const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default {
  convertNumToPos: ({ x, y }) => {
    return { x: alpha[x], y };
  },
  convertPosToNum: ({ x, y }) => {
    return { x: alpha.indexOf(x), y };
  },
};
