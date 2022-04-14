import React from "react";
import { Slider } from "antd";

function Inputs({ color, ChangeColor, Value }) {
  return (
    <>
      <div className="clrSlider">
        <label htmlFor={color}>{color}</label>
        <Slider
          value={Value[color]}
          max={255}
          min={0}
          trackStyle={{background:color,height:'5px'}}
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
