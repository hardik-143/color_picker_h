import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./common/Layout";
import Palette from "./pages/Palette";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/palette/:paletteSTR" element={<Palette />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
