import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MapComponent from "./MapComponent";
import { Buffer } from "buffer";
import process from "process";

globalThis.Buffer = Buffer;
globalThis.process = process;

ReactDOM.render(
  <Provider store={store}>
    <MapComponent />
  </Provider>,
  document.getElementById("root")
);
