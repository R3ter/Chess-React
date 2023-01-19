import React, { useState, useRef, useContext, useEffect } from "react";
import useDrag from "../../functions/useDrag";
import { useDispatch } from "react-redux";
import { movePiece, setHighlighted } from "./../../redux/BoardData";
import { funcs } from "../../functions/getPosition";
import Rules from "../../functions/Rules";

let clickPos = {};
let holdingElement = null;
const MainPiece = ({ image, alt = "", firstPos, board }) => {
  const divRef = useRef();
  firstPos = funcs.convertPosToNum(firstPos);
  firstPos.z = 1;
  const [translate, setTranslate] = useState(firstPos);

  const dispatch = useDispatch();
  useDrag(divRef, {
    onClick: (e) => {
      holdingElement = e.target;
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;
      clickPos = { x, y };
      const pos = funcs.convertNumToPos(clickPos);

      dispatch(
        setHighlighted(
          board[pos.x + pos.y]
            ? Rules.walk[board[pos.x + pos.y].type](pos.x, pos.y, board).map(
                (e) => funcs.convertPosToNum(e)
              )
            : []
        )
      );
    },
    ondrag: (e) => {
      if (!e.target || !e.target.parentElement) return;
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left - 50;
      const y = e.clientY - rect.top - 50;
      setTranslate({ x, y, z: 100 });
    },
    ondrop: (e) => {
      if (e.target !== holdingElement) return;
      const rect = e.target.parentElement.getBoundingClientRect();
      const x = Math.round(Math.round(e.clientX - rect.left - 50) / 100) * 100;
      const y = Math.round(Math.round(e.clientY - rect.top - 50) / 100) * 100;
      dispatch(
        movePiece({
          from: clickPos,
          to: { x: x, y: y },
          pass: () => {
            setTranslate({ x, y });
            clickPos = { x, y };
            const pos = funcs.convertNumToPos(clickPos);
            dispatch(
              setHighlighted(
                board[pos.x + pos.y]
                  ? Rules.walk[board[pos.x + pos.y].type](
                      pos.x,
                      pos.y,
                      board
                    ).map((e) => funcs.convertPosToNum(e))
                  : []
              )
            );
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
        zIndex: translate.z,
        width: "100px",
        WebkitTapHighlightColor: "transparent",
        display: "flex",
        justifyContent: "center",
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
