import React from "react";
import Recentcolor from "./RecentColor/Recentcolor";
import Palette from "./palette/Palette";
import PickerBody from "./PickerBody/PickerBody";
import { useGlobalContext } from "./context";

function App() {
  const { colorObj, showRecent } = useGlobalContext();
  // destructing color object

  // const [recentColor, setRecentColor] = useState(history.slice(0, 8));

  // useEffect(() => {
  //   setHexcode(rgb2hex());
  //   setrgbCode(`rgb(${red},${green},${blue})`);
  //   if (isRGB) {
  //     setColor4copy(rgbCode);
  //   } else {
  //     setColor4copy(hexCode);
  //   }
  // }, [rgb2hex, red, green, blue, isRGB, rgbCode, hexCode]);
  // function ChangeColor(c, e) {
  //   setColor((previousState) => {
  //     return { ...previousState, [c]: e };
  //   });
  // }
  // // change color from recently generated

  return (
    <>
      <main
        style={{
          background: `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`,
        }}
      >
        <section className="container max-width-500 py-5">
          <div className="wrapper ">
            <PickerBody />
            <div className="paletteDiv py-3">
              <Palette />
            </div>
            <div
              className={`recentlyGenerated py-3 ${!showRecent && "d-none"}`}
            >
              <Recentcolor />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
