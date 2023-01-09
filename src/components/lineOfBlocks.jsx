import React from "react";
import { BlackBlock, GrayBlock } from "./Blocks";

const LineOfBlocks = ({ x = false }) => {
  return [...Array(8)].map((key) => {
    x = !x;
    return x ? <BlackBlock key={key} /> : <GrayBlock key={key} />;
  });
};

export default LineOfBlocks;
