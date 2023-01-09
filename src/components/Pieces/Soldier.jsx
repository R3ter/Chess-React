import React from "react";
import Pawn from "./../../images/Pawn.svg";
import MainPiece from "./MainPiece";
const Soldier = ({ position, GridValues }) => {
  return (
    // <Draggable
    //   axis="both"
    //   handle=".handle"
    //   defaultPosition={{ x: 0, y: 0 }}
    //   position={null}
    //   grid={[25, 25]}
    //   scale={1}
    //   onStart={() => {}}
    //   onDrag={() => {}}
    //   onStop={() => {}}
    // >
    <MainPiece image={Pawn} GridValues={GridValues} firstPos={position} />
    // </Draggable>
  );
};

export default Soldier;
