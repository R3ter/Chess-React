import React from "react";
import QueenImage from "./../../images/Queen.svg";
import MainPiece from "./MainPiece";
const Queen = ({ position, GridValues }) => {
  return (
    <MainPiece image={QueenImage} GridValues={GridValues} firstPos={position} />
  );
};

export default Queen;
