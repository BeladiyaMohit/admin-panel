import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { Store } from "./Redux/Store/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
