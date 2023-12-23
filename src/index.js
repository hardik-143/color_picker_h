// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { AppProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <AppProvider>
    <App />
  </AppProvider>
);
