import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Values from "values.js";
import PaletteColor from "../components/palette/PaletteColor";
const Palette = () => {
  const { paletteSTR } = useParams();
  const [pltColors, setPltColors] = useState([]);

  useEffect(() => {
    let color = new Values(`#${paletteSTR}`).all();
    color = color.slice(1, color.length - 1);
    let clrfiltered = color;
    setPltColors(clrfiltered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="min-h-screen py-5 px-3 md:px-5 overflow-hidden">
      <div className=" text-black bg-white p-4 rounded-sm shadow-[0px_4px_15px_rgba(150,150,150,0.32)] relative">
        <div
          className="colorPalette flex flex-wrap items-center"
          id="colorPalette"
        >
          {pltColors.map((color, index) => {
            return (
              <PaletteColor
                squared
                color={color}
                index={index}
                key={index}
                showChild
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Palette;
