import { React } from "react";
import { useGlobalContext } from "../context";

function Colorcode() {
  const { isRGB, rgbCode, hexCode } = useGlobalContext();
  if( isRGB) 
  if (isRGB) {
    return <>{rgbCode}</>;
  }
  return <>{hexCode}</>;
}
export default Colorcode;
