import React from "react";
import PickerBody from "../PickerBody/PickerBody";
import Palette from "../components/palette/Palette";
import Recentcolor from "../ColorList/Recentcolor";

const Index = () => {
  return (
    <section className="w-[90%] max-w-[500px] py-5 px-3 md:px-5 overflow-hidden">
      <div className="text-black bg-white p-4 rounded-xl shadow-[0px_4px_15px_rgba(150,150,150,0.32)] relative z-10">
        <PickerBody />
        <Palette />
        <Recentcolor />
      </div>
    </section>
  );
};

export default Index;
