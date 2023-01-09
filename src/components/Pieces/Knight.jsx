import React from "react";
import KnightImage from "./../../images/Knight.svg";
import MainPiece from "./MainPiece";
const Knight = ({ position, GridValues }) => {
  return (
    <MainPiece
      image={KnightImage}
      GridValues={GridValues}
      firstPos={position}
    />
  );
};

export default Knight;
