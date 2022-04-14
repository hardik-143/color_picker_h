import { message } from "antd";
import { React, useEffect } from "react";

function Colorcode({ rgbCode, isrgb, hexCode }) {
  if (isrgb) {
    return <>{rgbCode}</>;
  }
  return <>{hexCode}</>;
}
export default Colorcode;
