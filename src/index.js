import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const AppWrapper = <Provider store={store}><App/></Provider>;

ReactDOM.render(AppWrapper, document.getElementById(`root`)
);
