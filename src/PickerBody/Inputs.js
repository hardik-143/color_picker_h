import React from "react";
import { Slider } from "antd";
import { useGlobalContext } from "../context";

function Inputs({ color }) {
  const { ChangeColor ,colorObj} = useGlobalContext();
  return (
    <>
      <div className={`text-left p-[5px_10px_0] ${color}`}>
        <label htmlFor={color}>{color}</label>
        <Slider
          value={colorObj[color]}
          max={255}
          min={0}
          trackStyle={{ background: color, height: "5px" }}
          onChange={(e) => {
            // e => color value
            ChangeColor(color, e);
          }}
        />
      </div>
    </>
  );
}

export default Inputs;
