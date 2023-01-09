import React from "react";
import KingImage from "./../../images/King.svg";
import MainPiece from "./MainPiece";
const King = ({ position, GridValues }) => {
  return (
    <MainPiece image={KingImage} GridValues={GridValues} firstPos={position} />
  );
};

export default King;
