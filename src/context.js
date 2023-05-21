import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const colors = ["red", "green", "blue"]; // colors array

  const [colorObj, setColorObj] = useState({
    red: 222,
    green: 215,
    blue: 34,
  }); // color object with rgb values

  //   change color function
  function ChangeColor(c, e) {
    setColorObj((previousState) => {
      return { ...previousState, [c]: e };
    });
  }
  //   change color function
  const { red, green, blue } = colorObj; // destructing color object into three colors
  const [rgbCode, setrgbCode] = useState(`rgb(${red},${green},${blue})`); // rgb string for copy and show
  const rgb2hex = useCallback(() => {
    return (
      "#" +
      convertsingleRGBToHex(red) +
      convertsingleRGBToHex(green) +
      convertsingleRGBToHex(blue)
    );
  }, [red, green, blue]); // converting rgb to hex
  const [hexCode, setHexcode] = useState(); // hex string for copy and show
  const [isRGB, setisRGB] = useState(true); // is color rgb or hex
  useEffect(() => {
    setHexcode(rgb2hex());
    setrgbCode(`rgb(${red},${green},${blue})`);
    if (isRGB) {
      setColor4copy(rgbCode);
    } else {
      setColor4copy(hexCode);
    }
  }, [rgb2hex, blue, green, red, isRGB, rgbCode, hexCode]); // converting rgb to hex and adding to color4copy ON CHANGE OF COLORS

  const [history, setHistory] = useState([]); // recent colors
  const [color4copy, setColor4copy] = useState(""); // color for copy
  // converting color

  // converting single color into hex
  const convertsingleRGBToHex = (clr) => {
    let hex = clr.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  // converting single color into hex
  // converting color

  // generating random color and adding in recent colors
  const randomColorValue = () => {
    return Math.floor(Math.random() * 256);
  };
  const randomColor = () => {
    setshowrecent(true);
    let r = randomColorValue();
    let g = randomColorValue();
    let b = randomColorValue();
    setColorObj({ red: r, green: g, blue: b });
    let color = `rgb(${r},${g},${b})`;
    // history.unshift(color); // adding in recent colors
    let temp = [...history];
    setHistory([color, ...temp]);
    if (history.length > 10) {
      //   history.pop(); // removing last color from recent colors if length is greater than 10
      temp = [...history];
      setHistory(temp.slice(0, 9));
    }
    localStorage.setItem("color", JSON.stringify(history.slice(0, 8))); // adding in localstorage
  };
  // generating random color and adding in recent colors

  // if there'll be recent colors in localstorage then show recent section will be visible
  const [showRecent, setshowrecent] = useState(() => {
    if (history.length === 0) {
      return false;
    }
    return true;
  });
  // if there'll be recent colors in localstorage then show recent section will be visible
  // get recent colors from localstorage
  const getrecent = () => {
    let recent = localStorage.getItem("color");
    if (recent) {
      return JSON.parse(recent);
    }
    return [];
  };
  // get recent colors from localstorage

  // clear revent history
  const clearRecent = () => {
    localStorage.removeItem("color");
    setHistory([]);
    setshowrecent(false);
  };
  // clear revent history

  const setMessage = (msg) => {
    // message.open({ content: msg}, 2);
    toast(msg, {
      duration: 2000,
      className: "custom_toast",
    });
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
        getrecent,
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
        setMessage,
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
