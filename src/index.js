import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "react-toastify/dist/ReactToastify.css";
import { app } from "./firebaseConfig";
ReactDOM.render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
