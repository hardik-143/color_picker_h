import React from "react";
import Recentcolor from "./ColorList/Recentcolor";
import Palette from "./palette/Palette";
import PickerBody from "./PickerBody/PickerBody";
import { useGlobalContext } from "./context";
import { Toaster } from "react-hot-toast";

function App() {
  const { colorObj, showRecent } = useGlobalContext();

  return (
    <>
      <main
        style={{
          background: `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`,
        }}
      >
        <Toaster position="bottom-center" reverseOrder={false} />
        <section className="container py-5">
          <div className="wrapper ">
            <PickerBody />

            <Palette />

            <div
              className={`recentlyGenerated py-2 ${!showRecent ? "close" : ""}`}
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
