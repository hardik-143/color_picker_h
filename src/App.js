import React from "react";
import Recentcolor from "./ColorList/Recentcolor";
import Palette from "./palette/Palette";
import PickerBody from "./PickerBody/PickerBody";
import { useGlobalContext } from "./context";

function App() {
  const { colorObj, showRecent } = useGlobalContext();

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
              className={`recentlyGenerated py-2 ${!showRecent && "close"}`}
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
