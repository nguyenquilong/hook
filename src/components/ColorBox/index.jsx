import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

ColorBox.propTypes = {};

function getRandomColor() {
  const arr_color = ["red", "black", "yellow"];
  const random_color = Math.trunc(Math.random() * arr_color.length);
  return arr_color[random_color];
}

function ColorBox() {
  //   const initColor = localStorage.getItem("box_color") || "deeppink";
  //   console.log(initColor);
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color_box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      ColorBox
    </div>
  );
}

export default ColorBox;
