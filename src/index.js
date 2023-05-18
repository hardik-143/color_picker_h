// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// eslint-disable-next-line
import "../node_modules/antd/dist/reset.css";
// eslint-disable-next-line
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
