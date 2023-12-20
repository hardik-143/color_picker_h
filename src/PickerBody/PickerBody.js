import { MdOutlineContentCopy } from "react-icons/md";
import React from "react";
import { useGlobalContext } from "../context";
import Colorcode from "./Colorcode";
import Inputs from "./Inputs";
const PickerBody = () => {
  const {
    color4copy,
    isRGB,
    setisRGB,
    colors,
    randomColor,
    setMessage,
    showRecentBtn,
    addColorToRecent
  } = useGlobalContext();
  return (
    <>
      <div className="picker-body text-center">
        <div className="flex items-center mb-3 justify-center gap-2">
          <MdOutlineContentCopy
            onClick={() => {
              navigator.clipboard.writeText(color4copy);
              setMessage(`color ${color4copy} copied`);
            }}
            className="relative w-[30px]"
          />
          <h4 className="text-2xl lowercase py-2 ps-0 px-3 m-0 user-select-none position-relative">
            <Colorcode />
          </h4>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-2">
          <button
            className="convertColorcodeBtn customBtn"
            onClick={() => {
              setisRGB(!isRGB);
              setMessage(`color type changed to ` + (!isRGB ? `rgb` : `hex`));
            }}
          >
            convert to {isRGB ? "hex" : "rgb"}
          </button>
          <button
            className="randomBtn customBtn"
            onClick={() => {
              randomColor();
            }}
          >
            generate random
          </button>
          {showRecentBtn && (
            <button
              className="add2recentBtn customBtn"
              onClick={() => {
                addColorToRecent();
              }}
            >
              add to recent
            </button>
          )}
        </div>
        {colors.map((clr, index) => {
          return <Inputs key={index} color={clr} />;
        })}
      </div>
    </>
  );
};

export default PickerBody;
