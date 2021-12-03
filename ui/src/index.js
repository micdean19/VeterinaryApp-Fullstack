// Usually we never touch this, instead we work in App.js
// Nothing here ever changes

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App.js";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
