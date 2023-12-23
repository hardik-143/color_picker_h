import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { setMessage } from "../../utils";
import { Tooltip } from "antd";

function PaletteColor({ color, index, squared, showChild }) {
  const { isRGB,ChangeColor } = useGlobalContext();
  const { rgb, hex } = color;
  let rgbColor = `rgb(${rgb})`;
  const [copied, setCopied] = useState(false);
  let hexColor = `#${hex}`;
  let clr;
  console.log(color);
  if (isRGB) {
    clr = rgbColor;
  } else {
    clr = hexColor;
  }
  useEffect(()=>{
    let baseColor = '';
    if(color.type === 'base'){
      baseColor = clr;
      const rgb = baseColor.match(/\d+/g);
      ChangeColor('red',rgb[0]);
      ChangeColor('green',rgb[1]);
      ChangeColor('blue',rgb[2]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const paletteDiv = () =>{
    return (
      <>
      <div
        className={`paletteDiv flex items-center justify-center ${
          squared ? "aspect-square min-h-[150px] group" : "h-[50px]"
        }`}
        id={`pallete-${index}`}
        style={{ background: `${clr}` }}
        key={index}
        onClick={() => {
          if(!squared) return;
          navigator.clipboard.writeText(clr);
          setMessage(`color ${clr} copied`)
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {showChild && (
          <p className='bg-white opacity-0 transition-all duration-150 ease-linear group-hover:opacity-100 bg-opacity-50 text-black px-1 rounded-[3px]'>
            {copied ? "copied" : clr}
          </p>
        )}
      </div>
      </>
    )
  }
  return (
    <>
    {
      squared ? ( 
        paletteDiv()
      ) : (
        <Tooltip title={clr}>
          {paletteDiv()}
        </Tooltip>
      )
    }
    </>
  );
}

export default PaletteColor;
