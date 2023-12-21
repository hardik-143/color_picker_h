import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { useGlobalContext } from "../context";
import { setMessage } from "../utils";

function Recentcolor() {
  const {
    clearRecent,
    history,
    setColorObj,
    convertsingleRGBToHex,
    isRGB,
    showRecent
  } = useGlobalContext();
  const updatefromHistory = (rgb) => {
    rgb = rgb
      .substring(4, rgb.length - 1)
      .replace(/ /g, "")
      .split(",");
    let [r, g, b] = rgb;
    setColorObj({ red: r, green: g, blue: b });
  };

  const getHexColor = (rgb) => {
    rgb = rgb
      .substring(4, rgb.length - 1)
      .replace(/ /g, "")
      .split(",");
    let [r, g, b] = rgb;
    return `#${convertsingleRGBToHex(Number(r))}${convertsingleRGBToHex(
      Number(g)
    )}${convertsingleRGBToHex(Number(b))}`;
  };

  const [showAll, setShowAll] = useState(false);
  const [colorsArr, setColorsArr] = useState(() => {
    if (history) {
      var length = showAll ? 8 : 2;
      return history.slice(0, length);
    } else {
      return [];
    }
  });
  useEffect(() => {
    if (showAll) {
      setColorsArr(history.slice(0, 8));
    } else {
      setColorsArr(history.slice(0, 2));
    }
  }, [showAll, history]);
  return (
    <div
      className={`transition-all duration-300 ease-linear pt-2 ${
        !showRecent ? "!min-h-0 !h-0 !p-0 m-0 overflow-hidden" : `min-h-[80px] ${showAll ? "h-auto" : "h-[110px]"}`
      }`}
    >
      <div className="recents">
        <div className="flex items-center justify-between flex-wrap mb-2">
          <h4 className="text-2xl m-0">recent</h4>
          <div className="flex items-center gap-1">
            <button
              className={`clearRecent customBtn smallBtn ${
                history.slice(0, 8).length === 0 ? "hidden" : null
              }`}
              onClick={() => {
                clearRecent();
                setShowAll(false);
                setMessage("recently generated cleared");
              }}
            >
              clear
            </button>
            
            <button
              className={`seeAll  smallBtn
             customBtn ${history.slice(0, 8).length <= 2 ? "hidden" : null}`}
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              {showAll ? "see less" : "see all"}
            </button>
          </div>
        </div>
        {/* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px; */}
        <div
          className={`grid grid-cols-2 py-2 pt-0`}
        >
          {colorsArr.map((item, index) => {
            return (
              <div className="btnWrapper inline-block p-[10px]" key={index}>
                <Tooltip title={isRGB ? item : getHexColor(item)}>
                  <div
                    className="recentClrBtn relative h-[30px] w-full rounded transition-all duration-300 ease-linear hover:scale-[1.04]"
                    style={{ background: item }}
                    onClick={() => updatefromHistory(item)}
                  ></div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recentcolor;
