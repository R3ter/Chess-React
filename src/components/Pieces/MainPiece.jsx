import React, { useState, useRef, useContext, useEffect } from "react";
import useDrag from "../../functions/useDrag";
import { useDispatch, useSelector } from "react-redux";
import { movePiece } from "./../../redux/BoardData";

const MainPiece = ({ image, alt = "", firstPos }) => {
  const divRef = useRef();
  const [translate, setTranslate] = useState(firstPos);

  let clickPos = {};
  const { board } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  console.log(board);
  useDrag(divRef, {
    onClick: (e) => {
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;
      clickPos = { x, y };
    },
    ondrag: (e) => {
      if (!e.target.parentElement) return;

      const rect = e.target.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left - 50;
      const y = e.clientY - rect.top - 50;
      setTranslate({ x, y });
    },
    ondrop: (e) => {
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;

      dispatch(movePiece({ from: clickPos, to: { x: x / 100, y: y / 100 } }));
    },
  });
  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        left: `${translate.x}px`,
        top: `${translate.y}px`,
        width: "100px",
        WebkitTapHighlightColor: "transparent",
        height: "100px",
      }}
    >
      <img
        style={{
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          WebkitTapHighlightColor: "transparent",
        }}
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default MainPiece;
