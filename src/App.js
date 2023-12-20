import React from "react";
import Recentcolor from "./ColorList/Recentcolor";
import Palette from "./palette/Palette";
import PickerBody from "./PickerBody/PickerBody";
import { useGlobalContext } from "./context";
import { Toaster } from "react-hot-toast";

function App() {
  const { colorObj } = useGlobalContext();

  return (
    <>
      <main
        className="min-h-screen w-full flex justify-center items-start transition-all duration-500 ease-linear font-outfit"
        style={{
          background: `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`,
        }}
      >
        <Toaster position="bottom-center" reverseOrder={false} />
        <section className="w-full max-w-[500px] py-5">
          <div className="text-black bg-white p-4 rounded-xl shadow-[0px_4px_15px_rgba(150,150,150,0.32)] relative z-10">
            <PickerBody />

            <Palette />

            
              <Recentcolor />

          </div>
        </section>
      </main>
    </>
  );
}

export default App;
