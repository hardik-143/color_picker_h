import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  checkPaletteColorsInUrl,
  randomColorValue,
  recentColorsFromStorage,
  setMessage,
  updateColorInStorage,
} from "./utils";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showDownloadPaletteModal, setshowDownloadPaletteModal] = useState(false)
  const colors = ["red", "green", "blue"]; // colors array
  const [showRecentBtn, setshowRecentBtn] = useState(false); // show add to recent colors button
  const [isRGB, setisRGB] = useState(true); // is color rgb or hex to display
  const [colorObj, setColorObj] = useState(checkPaletteColorsInUrl); // color object with rgb values

  // changing color from slider
  const ChangeColor = (c, e) => {
    setshowRecentBtn(true);
    setColorObj((previousState) => {
      return { ...previousState, [c]: e };
    });
  };

  const { red, green, blue } = colorObj; // destructing color object into three colors to get single Color
  const makeRGBSTR = useCallback(() => {
    return `rgb(${red},${green},${blue})`;
  }, [red, green, blue]); // creating rgb string

  const [rgbCode, setrgbCode] = useState(makeRGBSTR); // rgb string for copy and show
  const [hexCode, setHexcode] = useState(); // hex string for copy and show

  // converting single color into hex
  // one color is passed at a time
  const convertsingleRGBToHex = (clr) => {
    let hex = clr.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // converting rgb to hex
  const rgb2hex = useCallback(() => {
    return (
      "#" +
      convertsingleRGBToHex(red) +
      convertsingleRGBToHex(green) +
      convertsingleRGBToHex(blue)
    );
  }, [red, green, blue]);

  useEffect(() => {
    setHexcode(rgb2hex);
    setrgbCode(makeRGBSTR);
    setColor4copy(() => {
      return isRGB ? rgbCode : hexCode;
    });
  }, [rgb2hex, blue, green, red, isRGB, rgbCode, hexCode, makeRGBSTR]); // converting rgb to hex and adding to color4copy ON CHANGE OF COLORS

  const [history, setHistory] = useState(recentColorsFromStorage); // recent colors
  const [color4copy, setColor4copy] = useState(""); // color for copy on copy button click

  const udpateColorInHistory = (color) => {
    let temp = [...history];
    if (history.includes(color)) {
      return;
    }
    // if history length is 10 then remove last color and add new color in recent colors
    setHistory(() => {
      if (history.length > 10) {
        temp = [...history];
        temp.pop();
        updateColorInStorage([color, ...temp]);
        return [color, ...temp];
      }
      updateColorInStorage([color, ...temp]);
      return [color, ...temp];
    });
  };

  // if there'll be recent colors in localstorage then show recent section will be visible
  const [showRecent, setshowrecent] = useState(() => {
    return history.length > 0 ? true : false;
  });

  // generating random color and adding in recent colors
  const randomColor = () => {
    setshowrecent(true);
    let r = randomColorValue();
    let g = randomColorValue();
    let b = randomColorValue();

    setColorObj({ red: r, green: g, blue: b });
    udpateColorInHistory(`rgb(${r},${g},${b})`);
  };

  // add color to recent
  const addColorToRecent = () => {
    setshowrecent(true);
    udpateColorInHistory(makeRGBSTR());
    setshowRecentBtn(false);
    setMessage(`${isRGB ? makeRGBSTR() : `${rgb2hex()}`} added to recent`);
  };
  // clear revent history
  const clearRecent = () => {
    localStorage.removeItem("color");
    setHistory([]);
    setshowrecent(false);
  };

  return (
    <AppContext.Provider
      value={{
        colors,
        colorObj,
        setColorObj,
        isRGB,
        setisRGB,
        ChangeColor,
        randomColor,
        clearRecent,
        convertsingleRGBToHex,
        rgbCode,
        setrgbCode,
        hexCode,
        setHexcode,
        color4copy,
        showRecent,
        setshowrecent,
        history,
        setHistory,
        showRecentBtn,
        addColorToRecent,
        makeRGBSTR,
        showDownloadPaletteModal, setshowDownloadPaletteModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
