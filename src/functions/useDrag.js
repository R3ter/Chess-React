import React, { useState, useEffect } from "react";

const useDrag = (
  ref,
  { ondrag = () => {}, onClick = () => {}, ondrop = () => {} }
) => {
  const [isDragging, setIsDragging] = useState(false);
  const followMouse = (e) => {
    if (!e) return;
    if (isDragging) ondrag(e);
  };
  const mouseDown = (e) => {
    onClick(e);
    setIsDragging(true);
  };
  const mouseup = (e) => {
    ondrop(e);
    setIsDragging(false);
  };
  useEffect(() => {
    if (!ref.current) return;
    // window.addEventListener("mouseup", mouseup);
    ref.current.addEventListener("mouseup", mouseup);

    ref.current.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", followMouse);
    return () => {
      if (!ref.current) return;

      window.removeEventListener("mousemove", followMouse);
      ref.current.removeEventListener("mousedown", mouseDown);
      ref.current.removeEventListener("mouseup", mouseup);
      // window.removeEventListener("mouseup", mouseup);
    };
  }, [isDragging]);
};

export default useDrag;
