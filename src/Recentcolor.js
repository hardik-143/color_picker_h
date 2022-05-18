import React, { useState } from "react";
import { message, Tooltip } from "antd";

function Recentcolor({ recent, updatefromHstory ,clearRecent,color4copy}) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="recents ">
      <div className="d-flex align-items-center justify-content-between align-items-center flex-wrap">
        <h4 className="heading mb-2 me-2">recently generated</h4>
        <div className=" flex-grow-1 mb-2 align-items-center">
          <button className={`clearRecent customBtn ${recent.length <= 0 ? "d-none" : null}`} onClick={()=>{
            clearRecent()
            message.open({content:'recently generated cleared'},2)
          }}> clear </button>
          <button
            className={`seeAll ms-2
             customBtn ${recent.length <= 2 ? "d-none" : null}`}
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "see less" : "see all"}
          </button>
        </div>
      </div>
      <div className={`recentsWrapper ${showAll && "openShowAll"} py-2 pt-0
       `}>
        {recent.map((item, index) => {
          return (
            <div className="btnWrapper" key={index}>
              <Tooltip title={color4copy}>
                <div
                  className="recentClrBtn"
                  style={{ background: item }}
                  onClick={() => updatefromHstory(item)}
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
