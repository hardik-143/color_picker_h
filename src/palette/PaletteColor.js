import { Tooltip ,message} from "antd";
import React from "react";

function PaletteColor({ color, index, isrgb }) {
  // destructing  color object
  const { rgb, hex } = color;
  // rgb string
  let rgbColor = `rgb(${rgb})`;
  // hex string
  let hexColor = `#${hex}`;
  let clr;
  if (isrgb) {
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
          }}
        ></div>
      </Tooltip>
    </>
  );
}

export default PaletteColor;
