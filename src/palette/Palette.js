import React from "react";
import Values from "values.js";
import PaletteColor from "./PaletteColor";

function Palette({  rgbCode, isrgb }) {
  // getting color values for palette 
  const color = new Values(rgbCode).all(20);
  // removing base color 
  let clrfiltered = color.filter((color) => color.type !== "base");
  // removing white & black color from palette with slicing first & last element
  const colors = clrfiltered.slice(1, 9);

  return (
    <>
      <h4 className="heading">Palette</h4>
      <div className="colorPalette">
        {colors.map((color, index) => {
          return (
            <PaletteColor
              color={color}
              index={index}
              key={index}
              isrgb={isrgb}
            />
          );
        })}
      </div>
    </>
  );
}

export default Palette;
