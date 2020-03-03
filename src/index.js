import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {createAPI} from "./api.js";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadQuestions());

const AppWrapper = <Provider store={store}><App/></Provider>;

ReactDOM.render(AppWrapper, document.getElementById(`root`)
);
