import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
