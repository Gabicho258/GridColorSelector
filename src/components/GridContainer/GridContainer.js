import React, { useState } from "react";
import "./_GridContainer.css";
import GridItem from "../GridItem/GridItem.js";

const changeFocus = ({ target }) => {
  const [...optionsColor] = document.getElementsByClassName("optionColor");
  optionsColor.forEach((option) => {
    option.classList.remove("optionSelected");
  });
  target.classList.add("optionSelected");
};

const GridContainer = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <>
      <div className="grid">
        {new Array(100).fill(null).map((_, index) => {
          const key = index + 1;
          return <GridItem key={key} selectedColor={selectedColor} />;
        })}
      </div>
      <div
        className="optionColor optionColor__black"
        onClick={(e) => {
          setSelectedColor("#000");
          changeFocus(e);
        }}
      ></div>
      <div
        className="optionColor optionColor__blue"
        onClick={(e) => {
          setSelectedColor("#1cadf0");
          changeFocus(e);
        }}
      ></div>
      <div
        className="optionColor optionColor__green"
        onClick={(e) => {
          setSelectedColor("#17e421");
          changeFocus(e);
        }}
      ></div>
    </>
  );
};

export default GridContainer;
