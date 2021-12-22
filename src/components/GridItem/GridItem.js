import React, { useState } from "react";
import "./_GridItem.css";

const GridItem = ({ selectedColor }) => {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <div
      className="grid__item"
      style={{ backgroundColor: bgColor }}
      onClick={() => setBgColor(selectedColor)}
    ></div>
  );
};

export default GridItem;
