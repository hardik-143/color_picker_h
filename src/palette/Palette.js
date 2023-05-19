import { React, memo, useEffect, useState } from "react";
import Values from "values.js";
import PaletteColor from "./PaletteColor";
import { useGlobalContext } from "../context";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
function Palette() {
  const handle = useFullScreenHandle();
  const [pltColors, setPltColors] = useState([]);
  const { rgbCode } = useGlobalContext();

  const updatePalette = () => {
    let color;
    let clrfiltered;
    // getting color values for palette
    if (handle.active) {
      color = new Values(rgbCode).all();
      clrfiltered = color.filter((color) => color.type !== "base");
    } else {
      color = new Values(rgbCode).all(20);
      clrfiltered = color.filter((color) => color.type !== "base").slice(1, 9);
    }

    setPltColors(clrfiltered);
    // removing white & black color from palette with slicing first & last element
  };
  useEffect(() => {
    updatePalette();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rgbCode, handle]);
  // const toggleFullScreen = () => {
  //   if (handle.active) {
  //     handle.exit();
  //   } else {
  //     handle.enter();
  //   }
  //   updatePalette();
  // };
  return (
    <>
      <FullScreen handle={handle}>
        <div className="paletteDiv-main py-3">
          <div className="header">
            <h4 className="heading">Palette</h4>
            {/* <button
              className="full-screenbutton"
              onClick={() => toggleFullScreen()}
            >
              {handle.active ? (
                <AiOutlineFullscreenExit />
              ) : (
                <AiOutlineFullscreen />
              )}
            </button> */}
          </div>
          <div className="colorPalette">
            {pltColors.map((color, index) => {
              return <PaletteColor color={color} index={index} key={index} />;
            })}
          </div>
        </div>
      </FullScreen>
    </>
  );
}

export default memo(Palette);
