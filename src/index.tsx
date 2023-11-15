import React from "react";
import Routes from "./routes";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import logger from "redux-logger";

const store = legacy_createStore(rootReducer, applyMiddleware(logger));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
