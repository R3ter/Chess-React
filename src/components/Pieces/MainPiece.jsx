import React, { useState, useRef, useContext, useEffect } from "react";
import useDrag from "../../functions/useDrag";
import { useDispatch } from "react-redux";
import { movePiece } from "./../../redux/BoardData";
import { funcs } from "../../functions/getPosition";

let clickPos = {};
const MainPiece = ({ image, alt = "", firstPos }) => {
  const divRef = useRef();
  firstPos = funcs.convertPosToNum(firstPos);
  const [translate, setTranslate] = useState(firstPos);

  const dispatch = useDispatch();
  // console.log(board);
  useDrag(divRef, {
    onClick: (e) => {
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;
      clickPos = { x, y };
    },
    ondrag: (e) => {
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left - 50;
      const y = e.clientY - rect.top - 50;
      setTranslate({ x, y });
    },
    ondrop: (e) => {
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;
      dispatch(
        movePiece({
          from: clickPos,
          to: { x: x, y: y },
          pass: () => {
            setTranslate({ x, y });
          },
          rej: () => {
            setTranslate(clickPos);
          },
        })
      );
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
        src={require("./../../images/" + image + ".svg")}
        alt={alt}
      />
    </div>
  );
};

export default MainPiece;
