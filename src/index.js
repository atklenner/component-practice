import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize-css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "react-icons" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
