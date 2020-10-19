import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store/store";

import { Provider } from "react-redux";
import BorrowerPageComponent from "./pages/BorrowerPage/BorrowerPageComponent";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BorrowerPageComponent />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
