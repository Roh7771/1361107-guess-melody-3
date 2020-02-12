import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import Settings from "./mocks/settings";
import Questions from "./mocks/questions";

ReactDOM.render(<App questions={Questions} errorsCount={Settings.ERRORS_COUNT} />, document.getElementById(`root`)
);
