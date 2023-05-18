import { Tooltip, message } from "antd";
import React from "react";
import { useGlobalContext } from "../context";

function PaletteColor({ color, index}) {
  const { isRGB } = useGlobalContext();
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
          className="paletteDiv"
          id={`pallete-${index}`}
          style={{ background: `${clr}` }}
          // key={index}
          onClick={() => {
            navigator.clipboard.writeText(clr);
            message.open({ content: `color ${clr} copied` }, 2);
          }}
        ></div>
      </Tooltip>
    </>
  );
}

export default PaletteColor;
