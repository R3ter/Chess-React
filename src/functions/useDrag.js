import React, { useState, useEffect } from "react";

const useDrag = (
  ref,
  { ondrag = () => {}, onClick = () => {}, ondrop = () => {} }
) => {
  const [isDragging, setIsDragging] = useState(false);
  const followMouse = (e) => {
    if (isDragging) ondrag(e);
  };
  useEffect(() => {
    window.addEventListener("mouseup", (e) => {
      setIsDragging(false);
    });
    ref.current.addEventListener("mouseup", (e) => {
      ondrop(e);
      setIsDragging(false);
    });

    ref.current.addEventListener("mousedown", (e) => {
      onClick(e);
      setIsDragging(true);
    });
    window.addEventListener("mousemove", followMouse);
    return () => {
      window.removeEventListener("mousemove", followMouse);
      ref.current.removeEventListener("mousedown", followMouse);
      ref.current.removeEventListener("mouseup", followMouse);
      window.removeEventListener("mouseup", followMouse);
    };
  }, [isDragging]);
};

export default useDrag;
