import React from "react";
import { BlackBlock, GrayBlock } from "./Blocks";

const LineOfBlocks = ({ x = false, highlight = [], index }) => {
  return [...Array(8)].map((key, i) => {
    x = !x;
    const h = checkIfObjectInArray(highlight, { x: i, y: index });
    return x ? (
      <BlackBlock highlight={h} key={key} />
    ) : (
      <GrayBlock key={key} highlight={h} />
    );
  });
};
const checkIfObjectInArray = (array, object) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].x === object.x * 100 && array[i].y === object.y * 100) {
      return true;
    }
  }
  return false;
};

export default LineOfBlocks;
