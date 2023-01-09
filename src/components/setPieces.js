import Bishop from "./Pieces/Bishop";
import Soldier from "./Pieces/Soldier";
import King from "./Pieces/King";
import Knight from "./Pieces/Knight";
import Rook from "./Pieces/Rook";
import Queen from "./Pieces/Queen";
const SetPieces = () => {
  let GridValues = {};
  const obj = [
    {
      class: Bishop,
      positions: [
        { x: 500, y: 0 },
        { x: 200, y: 0 },
      ],
    },
    {
      class: Soldier,
      positions: [...Array(8)].map((_, i) => {
        return { x: i * 100, y: 100 };
      }),
    },
    {
      class: King,
      positions: [{ x: 400, y: 0 }],
    },
    {
      class: Knight,
      positions: [
        { x: 600, y: 0 },
        { x: 100, y: 0 },
      ],
    },
    {
      class: Rook,
      positions: [
        { x: 0, y: 0 },
        { x: 700, y: 0 },
      ],
    },
    {
      class: Queen,
      positions: [{ x: 300, y: 0 }],
    },
  ];
  return { obj, GridValues };
};
export default SetPieces;
