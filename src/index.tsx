import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/tw/index.css";
import { App } from "./App";
import { configValue, ConfigContext } from "./context";

ReactDOM.render(
  <ConfigContext.Provider value={configValue}>
    <Router>
      <App />
    </Router>
  </ConfigContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
