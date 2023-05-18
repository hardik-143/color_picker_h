import { React, memo } from "react";
import Values from "values.js";
import PaletteColor from "./PaletteColor";
import { useGlobalContext } from "../context";

function Palette() {
  const { rgbCode, isRGB } = useGlobalContext();
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
            />
          );
        })}
      </div>
    </>
  );
}

export default memo(Palette);
