// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// eslint-disable-next-line
import "../node_modules/antd/dist/reset.css";
// eslint-disable-next-line
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
