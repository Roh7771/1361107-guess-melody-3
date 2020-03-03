import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose, applyMiddleware} from "redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {Operation as DataOperation} from "./reducer.js";
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadQuestions());

const AppWrapper = <Provider store={store}><App/></Provider>;

ReactDOM.render(AppWrapper, document.getElementById(`root`)
);
