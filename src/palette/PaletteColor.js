import { Tooltip } from "antd";
import React from "react";
import { useGlobalContext } from "../context";

function PaletteColor({ color, index }) {
  const { isRGB,setMessage } = useGlobalContext();
  const { rgb, hex } = color;
  let rgbColor = `rgb(${rgb})`;
  let hexColor = `#${hex}`;
  let clr;
  if (isRGB) {
    clr = rgbColor;
  } else {
    clr = hexColor;
  }
  return (
    <>
      <Tooltip title={clr}>
        <div
          className="paletteDiv h-[50px] flex items-center justify-center"
          id={`pallete-${index}`}
          style={{ background: `${clr}` }}
          // key={index}
          onClick={() => {
            navigator.clipboard.writeText(clr);
            setMessage(`color ${clr} copied`)
          }}
        ></div>
      </Tooltip>
    </>
  );
}

export default PaletteColor;
