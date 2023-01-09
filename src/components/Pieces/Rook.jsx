import React from "react";
import MainPiece from "./MainPiece";
import RookImage from "./../../images/Rook.svg";
const Rook = ({ position, GridValues }) => (
  <MainPiece image={RookImage} GridValues={GridValues} firstPos={position} />
);

export default Rook;
