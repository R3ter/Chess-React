import React from "react";
import Bishop from "./../../images/Bishop.svg";
import MainPiece from "./MainPiece";
const Soldier = ({ position, GridValues }) => {
  return (
    <MainPiece
      Component={[{ step: 100, dir: "+y" }]}
      image={Bishop}
      firstPos={position}
      GridValues={GridValues}
    />
  );
};

export default Soldier;
