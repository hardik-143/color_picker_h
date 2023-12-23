import { React, memo, useEffect, useState } from "react";
import Values from "values.js";
import PaletteColor from "./PaletteColor";
import { useGlobalContext } from "../../context";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import * as htmlToImage from "html-to-image";
import { IoMdDownload } from "react-icons/io";

import { Tooltip } from "antd";
import { setMessage } from "../../utils";
import { useNavigate } from "react-router-dom";
// import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
function Palette() {
  const navigate = useNavigate();
  const handle = useFullScreenHandle();
  const [pltColors, setPltColors] = useState([]);
  const { rgbCode,hexCode } = useGlobalContext();

  // const copyPaletteLink = () => {
  //   let { red, green, blue } = colorObj;
  //   let link = `${window.location.origin}?palette=${get3digit(red)}${get3digit(green)}${get3digit(blue)}`; // rgb color
  //   navigator.clipboard.writeText(link);
  //   setMessage(`palette link copied`);
  // };

  const updatePalette = () => {
    let color;
    let clrfiltered;
    // getting color values for palette
    if (handle.active) {
      color = new Values(rgbCode).all();
      clrfiltered = color.filter((color) => color.type !== "base");
    } else {
      color = new Values(rgbCode).all(20);
      console.log(color);
      // removing white & black color from palette with slicing first & last element
      clrfiltered = color.filter((color) => color.type !== "base").slice(1, 9);
    }
    setPltColors(clrfiltered);
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

  const downloadPalette = () => {
    var node = document.getElementById("colorPalette");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        // download image
        img.src = dataUrl;
        var link = document.createElement("a");
        link.download = "palette.png";
        link.href = dataUrl;
        link.click();
        setMessage(`palette downloaded`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <>
      <FullScreen handle={handle}>
        <div className="paletteDiv-main py-3">
          <div className="flex justify-between items-center h-[30px] mb-2">
            <h4 className="text-2xl">Palette</h4>
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
            <div className="flex items-center gap-1">
              {/* <Tooltip title="copy link">
                <button
                  className="downloadBtn customBtn _icon"
                  onClick={() => copyPaletteLink()}
                >
                  <IoIosLink />
                </button>
              </Tooltip> */}
              <Tooltip title="download palette">
                <button
                  className="downloadBtn customBtn _icon"
                  onClick={() => downloadPalette()}
                >
                  <IoMdDownload />
                </button>
              </Tooltip>
            </div>
          </div>
          <div
            onClick={(e) => {
              navigate(`/palette/${hexCode.slice(1)}`);
            }}
          >
            <div
              className="colorPalette grid grid-cols-4 md:grid-cols-8"
              id="colorPalette"
            >
              {pltColors.map((color, index) => {
                return <PaletteColor color={color} index={index} key={index} />;
              })}
            </div>
          </div>
        </div>
      </FullScreen>
    </>
  );
}

export default memo(Palette);
