import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import Settings from "./mocks/settings";

ReactDOM.render(<App errorsCount={Settings.ERRORS_COUNT} />, document.getElementById(`root`)
);
