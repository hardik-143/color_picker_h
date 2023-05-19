import React, { useState } from "react";
import { Tooltip } from "antd";
import { useGlobalContext } from "../context";

function Recentcolor() {
  const { clearRecent, history, setColorObj, setMessage } = useGlobalContext();
  const updatefromHistory = (rgb) => {
    rgb = rgb
      .substring(4, rgb.length - 1)
      .replace(/ /g, "")
      .split(",");
    let [r, g, b] = rgb;
    setColorObj({ red: r, green: g, blue: b });
  };

  const [showAll, setShowAll] = useState(false);
  return (
    <div className="recents">
      <div className="d-flex align-items-center justify-content-between align-items-center flex-wrap mb-2">
        <h4 className="heading m-0">recently generated</h4>
        <div className="align-items-center">
          <button
            className={`clearRecent customBtn smallBtn ${
              history.slice(0, 8).length === 0 ? "d-none" : null
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
             customBtn ${history.slice(0, 8).length <= 2 ? "d-none" : null}`}
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "see less" : "see all"}
          </button>
        </div>
      </div>
      <div
        className={`recentsWrapper ${showAll && "openShowAll"} py-2 pt-0
       `}
      >
        {history.slice(0, 8).map((item, index) => {
          return (
            <div className="btnWrapper" key={index}>
              <Tooltip title={item}>
                <div
                  className="recentClrBtn"
                  style={{ background: item }}
                  onClick={() => updatefromHistory(item)}
                ></div>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recentcolor;
