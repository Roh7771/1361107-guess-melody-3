import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import App from "./components/app/app.jsx";
import Settings from "./mocks/settings";
import Questions from "./mocks/questions";
import reducer from "./reducer.js";
import {Provider} from "react-redux";

const store = createStore(reducer);

const AppWrapper = <Provider store={store}><App questions={Questions} errorsCount={Settings.ERRORS_COUNT} /></Provider>;

ReactDOM.render(AppWrapper, document.getElementById(`root`)
);
