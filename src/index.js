import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import MapComponent from "./MapComponent";

ReactDOM.render(
  <Provider store={store}>
    <MapComponent />
  </Provider>,
  document.getElementById("root")
);